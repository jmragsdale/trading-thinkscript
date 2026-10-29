"""Validate the JSON Schema keywords used by this repository's two contracts.

This is a scoped, standard-library checker, not a general JSON Schema engine.
It implements every assertion keyword present in the bundled schemas.
"""
import math
import re


def validate(value, schema, path='$'):
    def fail(message):
        raise ValueError(f'{path}: {message}')

    types = {
        'null': lambda x: x is None,
        'boolean': lambda x: isinstance(x, bool),
        'number': lambda x: isinstance(x, (int, float)) and not isinstance(x, bool) and math.isfinite(x),
        'integer': lambda x: isinstance(x, int) and not isinstance(x, bool),
        'string': lambda x: isinstance(x, str),
        'array': lambda x: isinstance(x, list),
        'object': lambda x: isinstance(x, dict),
    }
    declared = schema.get('type')
    if declared is not None:
        choices = declared if isinstance(declared, list) else [declared]
        if not any(types[t](value) for t in choices):
            fail(f'expected type {declared}')
    if 'const' in schema and (type(value) is not type(schema['const']) or value != schema['const']):
        fail('constant differs')
    if 'enum' in schema and value not in schema['enum']:
        fail('value outside enum')
    if isinstance(value, str):
        if len(value) < schema.get('minLength', 0):
            fail('string too short')
        if 'pattern' in schema and not re.search(schema['pattern'], value):
            fail('string does not match pattern')
    if isinstance(value, list):
        if len(value) < schema.get('minItems', 0):
            fail('array too short')
        if 'items' in schema:
            for i, item in enumerate(value):
                validate(item, schema['items'], f'{path}[{i}]')
    if isinstance(value, dict):
        missing = set(schema.get('required', [])) - set(value)
        if missing:
            fail('required fields missing: '+', '.join(sorted(missing)))
        properties = schema.get('properties', {})
        if schema.get('additionalProperties') is False and set(value) - set(properties):
            fail('unexpected fields')
        for key, rule in properties.items():
            if key in value:
                validate(value[key], rule, f'{path}.{key}')
    for rule in schema.get('allOf', []):
        validate(value, rule, path)
    if 'if' in schema:
        try:
            validate(value, schema['if'], path)
            applies = True
        except ValueError:
            applies = False
        branch = 'then' if applies else 'else'
        if branch in schema:
            validate(value, schema[branch], path)
