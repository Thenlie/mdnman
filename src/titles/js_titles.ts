/* eslint-disable prettier/prettier */
export const jsTitles: {
    path: string;
    title: string;
}[] = [
    {
        path: 'lib/javascript/classes/constructor/index.md',
        title: 'constructor',
    },
    {
        path: 'lib/javascript/classes/extends/index.md',
        title: 'extends',
    },
    {
        path: 'lib/javascript/classes/index.md',
        title: 'Classes',
    },
    {
        path: 'lib/javascript/classes/private_properties/index.md',
        title: 'Private properties',
    },
    {
        path: 'lib/javascript/classes/public_class_fields/index.md',
        title: 'Public class fields',
    },
    {
        path: 'lib/javascript/classes/static/index.md',
        title: 'static',
    },
    {
        path: 'lib/javascript/classes/static_initialization_blocks/index.md',
        title: 'Static initialization blocks',
    },
    {
        path: 'lib/javascript/deprecated_and_obsolete_features/index.md',
        title: 'Deprecated and obsolete features',
    },
    {
        path: 'lib/javascript/errors/already_has_pragma/index.md',
        title: 'Warning: -file- is being assigned a //# sourceMappingURL, but already has one',
    },
    {
        path: 'lib/javascript/errors/arguments_not_allowed/index.md',
        title: 'SyntaxError: arguments is not valid in fields',
    },
    {
        path: 'lib/javascript/errors/array_sort_argument/index.md',
        title: 'TypeError: invalid Array.prototype.sort argument',
    },
    {
        path: 'lib/javascript/errors/await_yield_in_parameter/index.md',
        title: 'SyntaxError: await/yield expression can\'t be used in parameter',
    },
    {
        path: 'lib/javascript/errors/bad_await/index.md',
        title: 'SyntaxError: await is only valid in async functions, async generators and modules',
    },
    {
        path: 'lib/javascript/errors/bad_break/index.md',
        title: 'SyntaxError: unlabeled break must be inside loop or switch',
    },
    {
        path: 'lib/javascript/errors/bad_continue/index.md',
        title: 'SyntaxError: continue must be inside loop',
    },
    {
        path: 'lib/javascript/errors/bad_new_optional/index.md',
        title: 'SyntaxError: new keyword cannot be used with an optional chain',
    },
    {
        path: 'lib/javascript/errors/bad_optional_template/index.md',
        title: 'SyntaxError: tagged template cannot be used with optional chain',
    },
    {
        path: 'lib/javascript/errors/bad_radix/index.md',
        title: 'RangeError: radix must be an integer',
    },
    {
        path: 'lib/javascript/errors/bad_regexp_flag/index.md',
        title: 'SyntaxError: invalid regular expression flag "x"',
    },
    {
        path: 'lib/javascript/errors/bad_return/index.md',
        title: 'SyntaxError: return not in function',
    },
    {
        path: 'lib/javascript/errors/bad_strict_arguments_eval/index.md',
        title: 'SyntaxError: \'arguments\'/\'eval\' can\'t be defined or assigned to in strict mode code',
    },
    {
        path: 'lib/javascript/errors/bad_super_call/index.md',
        title: 'SyntaxError: super() is only valid in derived class constructors',
    },
    {
        path: 'lib/javascript/errors/bad_super_prop/index.md',
        title: 'SyntaxError: use of super property/member accesses only valid within methods or eval code within methods',
    },
    {
        path: 'lib/javascript/errors/bigint_division_by_zero/index.md',
        title: 'RangeError: BigInt division by zero',
    },
    {
        path: 'lib/javascript/errors/bigint_negative_exponent/index.md',
        title: 'RangeError: BigInt negative exponent',
    },
    {
        path: 'lib/javascript/errors/bigint_not_serializable/index.md',
        title: 'TypeError: BigInt value can\'t be serialized in JSON',
    },
    {
        path: 'lib/javascript/errors/builtin_ctor_no_new/index.md',
        title: 'TypeError: calling a builtin X constructor without new is forbidden',
    },
    {
        path: 'lib/javascript/errors/called_on_incompatible_type/index.md',
        title: 'TypeError: X.prototype.y called on incompatible type',
    },
    {
        path: 'lib/javascript/errors/cant_access_lexical_declaration_before_init/index.md',
        title: 'ReferenceError: can\'t access lexical declaration \'X\' before initialization',
    },
    {
        path: 'lib/javascript/errors/cant_assign_to_property/index.md',
        title: 'TypeError: can\'\'t assign to property "x" on "y": not an object',
    },
    {
        path: 'lib/javascript/errors/cant_be_converted_to_bigint_because_it_isnt_an_integer/index.md',
        title: 'RangeError: x can\'t be converted to BigInt because it isn\'t an integer',
    },
    {
        path: 'lib/javascript/errors/cant_convert_bigint_to_number/index.md',
        title: 'TypeError: can\'t convert BigInt to number',
    },
    {
        path: 'lib/javascript/errors/cant_convert_x_to_bigint/index.md',
        title: 'TypeError: can\'t convert x to BigInt',
    },
    {
        path: 'lib/javascript/errors/cant_define_property_object_not_extensible/index.md',
        title: 'TypeError: can\'\'t define property "x": "obj" is not extensible',
    },
    {
        path: 'lib/javascript/errors/cant_delete/index.md',
        title: 'TypeError: property "x" is non-configurable and can\'\'t be deleted',
    },
    {
        path: 'lib/javascript/errors/cant_delete_private_fields/index.md',
        title: 'SyntaxError: private fields can\'t be deleted',
    },
    {
        path: 'lib/javascript/errors/cant_redefine_property/index.md',
        title: '\'TypeError: can\'\'t redefine non-configurable property "x"\'',
    },
    {
        path: 'lib/javascript/errors/cant_set_prototype/index.md',
        title: 'TypeError: can\'t set prototype of this object',
    },
    {
        path: 'lib/javascript/errors/cant_use_nullish_coalescing_unparenthesized/index.md',
        title: 'SyntaxError: cannot use `??` unparenthesized within `||` and `&&` expressions',
    },
    {
        path: 'lib/javascript/errors/class_ctor_no_new/index.md',
        title: 'TypeError: class constructors must be invoked with \'new\'',
    },
    {
        path: 'lib/javascript/errors/constructor_cant_be_used_directly/index.md',
        title: 'TypeError: Iterator/AsyncIterator constructor can\'t be used directly',
    },
    {
        path: 'lib/javascript/errors/cyclic_object_value/index.md',
        title: 'TypeError: cyclic object value',
    },
    {
        path: 'lib/javascript/errors/cyclic_prototype/index.md',
        title: 'TypeError: can\'t set prototype: it would cause a prototype chain cycle',
    },
    {
        path: 'lib/javascript/errors/delete_in_strict_mode/index.md',
        title: 'SyntaxError: applying the \'delete\' operator to an unqualified name is deprecated',
    },
    {
        path: 'lib/javascript/errors/deprecated_caller_or_arguments_usage/index.md',
        title: 'ReferenceError: deprecated caller or arguments usage',
    },
    {
        path: 'lib/javascript/errors/deprecated_octal_escape_sequence/index.md',
        title: 'SyntaxError: octal escape sequences can\'t be used in untagged template literals or in strict mode code',
    },
    {
        path: 'lib/javascript/errors/deprecated_octal_literal/index.md',
        title: 'SyntaxError: "0"-prefixed octal literals are deprecated',
    },
    {
        path: 'lib/javascript/errors/deprecated_source_map_pragma/index.md',
        title: 'SyntaxError: Using //@ to indicate sourceURL pragmas is deprecated. Use //# instead',
    },
    {
        path: 'lib/javascript/errors/duplicate_parameter/index.md',
        title: 'SyntaxError: duplicate formal argument x',
    },
    {
        path: 'lib/javascript/errors/duplicate_proto/index.md',
        title: 'SyntaxError: property name __proto__ appears more than once in object literal',
    },
    {
        path: 'lib/javascript/errors/either_be_both_static_or_non-static/index.md',
        title: 'SyntaxError: getter and setter for private name #x should either be both static or non-static',
    },
    {
        path: 'lib/javascript/errors/form_must_be_one_of/index.md',
        title: 'RangeError: form must be one of \'NFC\', \'NFD\', \'NFKC\', or \'NFKD\'',
    },
    {
        path: 'lib/javascript/errors/function_label/index.md',
        title: 'SyntaxError: functions cannot be labelled',
    },
    {
        path: 'lib/javascript/errors/get_set_missing_private/index.md',
        title: 'TypeError: can\'t access/set private field or method: object is not the right class',
    },
    {
        path: 'lib/javascript/errors/getter_no_arguments/index.md',
        title: 'SyntaxError: getter functions must have no arguments',
    },
    {
        path: 'lib/javascript/errors/getter_only/index.md',
        title: 'TypeError: setting getter-only property "x"',
    },
    {
        path: 'lib/javascript/errors/hash_outside_class/index.md',
        title: 'SyntaxError: Unexpected \'#\' used outside of class body',
    },
    {
        path: 'lib/javascript/errors/identifier_after_number/index.md',
        title: 'SyntaxError: identifier starts immediately after numeric literal',
    },
    {
        path: 'lib/javascript/errors/illegal_character/index.md',
        title: 'SyntaxError: illegal character',
    },
    {
        path: 'lib/javascript/errors/import_decl_module_top_level/index.md',
        title: 'SyntaxError: import declarations may only appear at top level of a module',
    },
    {
        path: 'lib/javascript/errors/in_operator_no_object/index.md',
        title: 'TypeError: cannot use \'in\' operator to search for \'x\' in \'y\'',
    },
    {
        path: 'lib/javascript/errors/index.md',
        title: 'JavaScript error reference',
    },
    {
        path: 'lib/javascript/errors/invalid_array_length/index.md',
        title: 'RangeError: invalid array length',
    },
    {
        path: 'lib/javascript/errors/invalid_assignment_left-hand_side/index.md',
        title: 'SyntaxError: invalid assignment left-hand side',
    },
    {
        path: 'lib/javascript/errors/invalid_bigint_syntax/index.md',
        title: 'SyntaxError: invalid BigInt syntax',
    },
    {
        path: 'lib/javascript/errors/invalid_const_assignment/index.md',
        title: '\'TypeError: invalid assignment to const "x"\'',
    },
    {
        path: 'lib/javascript/errors/invalid_date/index.md',
        title: 'RangeError: invalid date',
    },
    {
        path: 'lib/javascript/errors/invalid_derived_return/index.md',
        title: 'TypeError: derived class constructor returned invalid value x',
    },
    {
        path: 'lib/javascript/errors/invalid_for-in_initializer/index.md',
        title: 'SyntaxError: for-in loop head declarations may not have initializers',
    },
    {
        path: 'lib/javascript/errors/invalid_for-of_initializer/index.md',
        title: 'SyntaxError: a declaration in the head of a for-of loop can\'t have an initializer',
    },
    {
        path: 'lib/javascript/errors/invalid_right_hand_side_instanceof_operand/index.md',
        title: 'TypeError: invalid \'instanceof\' operand \'x\'',
    },
    {
        path: 'lib/javascript/errors/is_not_iterable/index.md',
        title: 'TypeError: \'x\' is not iterable',
    },
    {
        path: 'lib/javascript/errors/json_bad_parse/index.md',
        title: 'SyntaxError: JSON.parse: bad parsing',
    },
    {
        path: 'lib/javascript/errors/key_not_weakly_held/index.md',
        title: 'TypeError: WeakSet key/WeakMap value \'x\' must be an object or an unregistered symbol',
    },
    {
        path: 'lib/javascript/errors/label_not_found/index.md',
        title: 'SyntaxError: label not found',
    },
    {
        path: 'lib/javascript/errors/malformed_uri/index.md',
        title: 'URIError: malformed URI sequence',
    },
    {
        path: 'lib/javascript/errors/missing_bracket_after_list/index.md',
        title: 'SyntaxError: missing ] after element list',
    },
    {
        path: 'lib/javascript/errors/missing_colon_after_property_id/index.md',
        title: 'SyntaxError: missing : after property id',
    },
    {
        path: 'lib/javascript/errors/missing_curly_after_function_body/index.md',
        title: 'SyntaxError: missing } after function body',
    },
    {
        path: 'lib/javascript/errors/missing_curly_after_property_list/index.md',
        title: 'SyntaxError: missing } after property list',
    },
    {
        path: 'lib/javascript/errors/missing_formal_parameter/index.md',
        title: 'SyntaxError: missing formal parameter',
    },
    {
        path: 'lib/javascript/errors/missing_initializer_in_const/index.md',
        title: 'SyntaxError: missing = in const declaration',
    },
    {
        path: 'lib/javascript/errors/missing_name_after_dot_operator/index.md',
        title: 'SyntaxError: missing name after . operator',
    },
    {
        path: 'lib/javascript/errors/missing_parenthesis_after_argument_list/index.md',
        title: 'SyntaxError: missing ) after argument list',
    },
    {
        path: 'lib/javascript/errors/missing_parenthesis_after_condition/index.md',
        title: 'SyntaxError: missing ) after condition',
    },
    {
        path: 'lib/javascript/errors/more_arguments_needed/index.md',
        title: 'TypeError: More arguments needed',
    },
    {
        path: 'lib/javascript/errors/negative_repetition_count/index.md',
        title: 'RangeError: repeat count must be non-negative',
    },
    {
        path: 'lib/javascript/errors/no_non-null_object/index.md',
        title: '\'TypeError: "x" is not a non-null object\'',
    },
    {
        path: 'lib/javascript/errors/no_properties/index.md',
        title: 'TypeError: null/undefined has no properties',
    },
    {
        path: 'lib/javascript/errors/no_variable_name/index.md',
        title: 'SyntaxError: missing variable name',
    },
    {
        path: 'lib/javascript/errors/non_configurable_array_element/index.md',
        title: 'TypeError: can\'t delete non-configurable array element',
    },
    {
        path: 'lib/javascript/errors/not_a_constructor/index.md',
        title: '\'TypeError: "x" is not a constructor\'',
    },
    {
        path: 'lib/javascript/errors/not_a_function/index.md',
        title: '\'TypeError: "x" is not a function\'',
    },
    {
        path: 'lib/javascript/errors/not_a_valid_code_point/index.md',
        title: 'RangeError: argument is not a valid code point',
    },
    {
        path: 'lib/javascript/errors/not_defined/index.md',
        title: '\'ReferenceError: "x" is not defined\'',
    },
    {
        path: 'lib/javascript/errors/parameter_after_rest_parameter/index.md',
        title: 'SyntaxError: parameter after rest parameter',
    },
    {
        path: 'lib/javascript/errors/precision_range/index.md',
        title: 'RangeError: precision is out of range',
    },
    {
        path: 'lib/javascript/errors/private_double_initialization/index.md',
        title: 'TypeError: Initializing an object twice is an error with private fields/methods',
    },
    {
        path: 'lib/javascript/errors/private_setter_only/index.md',
        title: 'TypeError: getting private setter-only property',
    },
    {
        path: 'lib/javascript/errors/promise_any_all_rejected/index.md',
        title: 'AggregateError: No Promise in Promise.any was resolved',
    },
    {
        path: 'lib/javascript/errors/property_access_denied/index.md',
        title: 'Error: Permission denied to access property "x"',
    },
    {
        path: 'lib/javascript/errors/read-only/index.md',
        title: 'TypeError: "x" is read-only',
    },
    {
        path: 'lib/javascript/errors/redeclared_parameter/index.md',
        title: 'SyntaxError: redeclaration of formal parameter "x"',
    },
    {
        path: 'lib/javascript/errors/reduce_of_empty_array_with_no_initial_value/index.md',
        title: 'TypeError: Reduce of empty array with no initial value',
    },
    {
        path: 'lib/javascript/errors/regex_backslash_at_end_of_pattern/index.md',
        title: 'SyntaxError: \\ at end of pattern',
    },
    {
        path: 'lib/javascript/errors/regex_character_class_escape_in_class_range/index.md',
        title: 'SyntaxError: character class escape cannot be used in class range in regular expression',
    },
    {
        path: 'lib/javascript/errors/regex_duplicate_capture_group_name/index.md',
        title: 'SyntaxError: duplicate capture group name in regular expression',
    },
    {
        path: 'lib/javascript/errors/regex_incomplete_quantifier/index.md',
        title: 'SyntaxError: incomplete quantifier in regular expression',
    },
    {
        path: 'lib/javascript/errors/regex_invalid_capture_group_name/index.md',
        title: 'SyntaxError: invalid capture group name in regular expression',
    },
    {
        path: 'lib/javascript/errors/regex_invalid_char_in_class/index.md',
        title: 'SyntaxError: invalid character in class in regular expression',
    },
    {
        path: 'lib/javascript/errors/regex_invalid_class_set_operation/index.md',
        title: 'SyntaxError: invalid class set operation in regular expression',
    },
    {
        path: 'lib/javascript/errors/regex_invalid_decimal_escape/index.md',
        title: 'SyntaxError: invalid decimal escape in regular expression',
    },
    {
        path: 'lib/javascript/errors/regex_invalid_group/index.md',
        title: 'SyntaxError: invalid regexp group',
    },
    {
        path: 'lib/javascript/errors/regex_invalid_identity_escape/index.md',
        title: 'SyntaxError: invalid identity escape in regular expression',
    },
    {
        path: 'lib/javascript/errors/regex_invalid_named_capture_reference/index.md',
        title: 'SyntaxError: invalid named capture reference in regular expression',
    },
    {
        path: 'lib/javascript/errors/regex_invalid_property_name/index.md',
        title: 'SyntaxError: invalid property name in regular expression',
    },
    {
        path: 'lib/javascript/errors/regex_invalid_range_in_character_class/index.md',
        title: 'SyntaxError: invalid range in character class',
    },
    {
        path: 'lib/javascript/errors/regex_invalid_unicode_escape/index.md',
        title: 'SyntaxError: invalid unicode escape in regular expression',
    },
    {
        path: 'lib/javascript/errors/regex_negated_char_class_with_strings/index.md',
        title: 'SyntaxError: negated character class with strings in regular expression',
    },
    {
        path: 'lib/javascript/errors/regex_nothing_to_repeat/index.md',
        title: 'SyntaxError: nothing to repeat',
    },
    {
        path: 'lib/javascript/errors/regex_numbers_out_of_order_in_quantifier/index.md',
        title: 'SyntaxError: numbers out of order in {} quantifier.',
    },
    {
        path: 'lib/javascript/errors/regex_raw_bracket/index.md',
        title: 'SyntaxError: raw bracket is not allowed in regular expression with unicode flag',
    },
    {
        path: 'lib/javascript/errors/requires_global_regexp/index.md',
        title: 'TypeError: matchAll/replaceAll must be called with a global RegExp',
    },
    {
        path: 'lib/javascript/errors/reserved_identifier/index.md',
        title: '\'SyntaxError: "x" is a reserved identifier\'',
    },
    {
        path: 'lib/javascript/errors/rest_with_default/index.md',
        title: 'SyntaxError: rest parameter may not have a default',
    },
    {
        path: 'lib/javascript/errors/resulting_string_too_large/index.md',
        title: 'RangeError: repeat count must be less than infinity',
    },
    {
        path: 'lib/javascript/errors/setter_one_argument/index.md',
        title: 'SyntaxError: setter functions must have one argument',
    },
    {
        path: 'lib/javascript/errors/stmt_after_return/index.md',
        title: 'Warning: unreachable code after return statement',
    },
    {
        path: 'lib/javascript/errors/strict_non_simple_params/index.md',
        title: 'SyntaxError: "use strict" not allowed in function with non-simple parameters',
    },
    {
        path: 'lib/javascript/errors/string_literal_eol/index.md',
        title: 'SyntaxError: string literal contains an unescaped line break',
    },
    {
        path: 'lib/javascript/errors/super_called_twice/index.md',
        title: 'ReferenceError: super() called twice in derived class constructor',
    },
    {
        path: 'lib/javascript/errors/super_not_called/index.md',
        title: 'ReferenceError: must call super constructor before using \'this\' in derived class constructor',
    },
    {
        path: 'lib/javascript/errors/too_much_recursion/index.md',
        title: 'InternalError: too much recursion',
    },
    {
        path: 'lib/javascript/errors/undeclared_private_field_or_method/index.md',
        title: 'SyntaxError: reference to undeclared private field or method #x',
    },
    {
        path: 'lib/javascript/errors/undeclared_var/index.md',
        title: 'ReferenceError: assignment to undeclared variable "x"',
    },
    {
        path: 'lib/javascript/errors/unexpected_token/index.md',
        title: 'SyntaxError: Unexpected token',
    },
    {
        path: 'lib/javascript/errors/unexpected_type/index.md',
        title: 'TypeError: "x" is (not) "y"',
    },
    {
        path: 'lib/javascript/errors/unnamed_function_statement/index.md',
        title: 'SyntaxError: function statement requires a name',
    },
    {
        path: 'lib/javascript/errors/unparenthesized_unary_expr_lhs_exponentiation/index.md',
        title: 'SyntaxError: unparenthesized unary expression can\'t appear on the left-hand side of \'**\'',
    },
    {
        path: 'lib/javascript/functions/arguments/callee/index.md',
        title: 'arguments.callee',
    },
    {
        path: 'lib/javascript/functions/arguments/index.md',
        title: 'The arguments object',
    },
    {
        path: 'lib/javascript/functions/arguments/length/index.md',
        title: 'arguments.length',
    },
    {
        path: 'lib/javascript/functions/arguments/symbol.iterator/index.md',
        title: 'arguments[Symbol.iterator]()',
    },
    {
        path: 'lib/javascript/functions/arrow_functions/index.md',
        title: 'Arrow function expressions',
    },
    {
        path: 'lib/javascript/functions/default_parameters/index.md',
        title: 'Default parameters',
    },
    {
        path: 'lib/javascript/functions/get/index.md',
        title: 'get',
    },
    {
        path: 'lib/javascript/functions/index.md',
        title: 'Functions',
    },
    {
        path: 'lib/javascript/functions/method_definitions/index.md',
        title: 'Method definitions',
    },
    {
        path: 'lib/javascript/functions/rest_parameters/index.md',
        title: 'Rest parameters',
    },
    {
        path: 'lib/javascript/functions/set/index.md',
        title: 'set',
    },
    {
        path: 'lib/javascript/global_objects/aggregateerror/aggregateerror/index.md',
        title: 'AggregateError() constructor',
    },
    {
        path: 'lib/javascript/global_objects/aggregateerror/errors/index.md',
        title: 'AggregateError: errors',
    },
    {
        path: 'lib/javascript/global_objects/aggregateerror/index.md',
        title: 'AggregateError',
    },
    {
        path: 'lib/javascript/global_objects/array/array/index.md',
        title: 'Array() constructor',
    },
    {
        path: 'lib/javascript/global_objects/array/at/index.md',
        title: 'Array.prototype.at()',
    },
    {
        path: 'lib/javascript/global_objects/array/concat/index.md',
        title: 'Array.prototype.concat()',
    },
    {
        path: 'lib/javascript/global_objects/array/copywithin/index.md',
        title: 'Array.prototype.copyWithin()',
    },
    {
        path: 'lib/javascript/global_objects/array/entries/index.md',
        title: 'Array.prototype.entries()',
    },
    {
        path: 'lib/javascript/global_objects/array/every/index.md',
        title: 'Array.prototype.every()',
    },
    {
        path: 'lib/javascript/global_objects/array/fill/index.md',
        title: 'Array.prototype.fill()',
    },
    {
        path: 'lib/javascript/global_objects/array/filter/index.md',
        title: 'Array.prototype.filter()',
    },
    {
        path: 'lib/javascript/global_objects/array/find/index.md',
        title: 'Array.prototype.find()',
    },
    {
        path: 'lib/javascript/global_objects/array/findindex/index.md',
        title: 'Array.prototype.findIndex()',
    },
    {
        path: 'lib/javascript/global_objects/array/findlast/index.md',
        title: 'Array.prototype.findLast()',
    },
    {
        path: 'lib/javascript/global_objects/array/findlastindex/index.md',
        title: 'Array.prototype.findLastIndex()',
    },
    {
        path: 'lib/javascript/global_objects/array/flat/index.md',
        title: 'Array.prototype.flat()',
    },
    {
        path: 'lib/javascript/global_objects/array/flatmap/index.md',
        title: 'Array.prototype.flatMap()',
    },
    {
        path: 'lib/javascript/global_objects/array/foreach/index.md',
        title: 'Array.prototype.forEach()',
    },
    {
        path: 'lib/javascript/global_objects/array/from/index.md',
        title: 'Array.from()',
    },
    {
        path: 'lib/javascript/global_objects/array/fromasync/index.md',
        title: 'Array.fromAsync()',
    },
    {
        path: 'lib/javascript/global_objects/array/includes/index.md',
        title: 'Array.prototype.includes()',
    },
    {
        path: 'lib/javascript/global_objects/array/index.md',
        title: 'Array',
    },
    {
        path: 'lib/javascript/global_objects/array/indexof/index.md',
        title: 'Array.prototype.indexOf()',
    },
    {
        path: 'lib/javascript/global_objects/array/isarray/index.md',
        title: 'Array.isArray()',
    },
    {
        path: 'lib/javascript/global_objects/array/join/index.md',
        title: 'Array.prototype.join()',
    },
    {
        path: 'lib/javascript/global_objects/array/keys/index.md',
        title: 'Array.prototype.keys()',
    },
    {
        path: 'lib/javascript/global_objects/array/lastindexof/index.md',
        title: 'Array.prototype.lastIndexOf()',
    },
    {
        path: 'lib/javascript/global_objects/array/length/index.md',
        title: 'Array: length',
    },
    {
        path: 'lib/javascript/global_objects/array/map/index.md',
        title: 'Array.prototype.map()',
    },
    {
        path: 'lib/javascript/global_objects/array/of/index.md',
        title: 'Array.of()',
    },
    {
        path: 'lib/javascript/global_objects/array/pop/index.md',
        title: 'Array.prototype.pop()',
    },
    {
        path: 'lib/javascript/global_objects/array/push/index.md',
        title: 'Array.prototype.push()',
    },
    {
        path: 'lib/javascript/global_objects/array/reduce/index.md',
        title: 'Array.prototype.reduce()',
    },
    {
        path: 'lib/javascript/global_objects/array/reduceright/index.md',
        title: 'Array.prototype.reduceRight()',
    },
    {
        path: 'lib/javascript/global_objects/array/reverse/index.md',
        title: 'Array.prototype.reverse()',
    },
    {
        path: 'lib/javascript/global_objects/array/shift/index.md',
        title: 'Array.prototype.shift()',
    },
    {
        path: 'lib/javascript/global_objects/array/slice/index.md',
        title: 'Array.prototype.slice()',
    },
    {
        path: 'lib/javascript/global_objects/array/some/index.md',
        title: 'Array.prototype.some()',
    },
    {
        path: 'lib/javascript/global_objects/array/sort/index.md',
        title: 'Array.prototype.sort()',
    },
    {
        path: 'lib/javascript/global_objects/array/splice/index.md',
        title: 'Array.prototype.splice()',
    },
    {
        path: 'lib/javascript/global_objects/array/symbol.iterator/index.md',
        title: 'Array.prototype[Symbol.iterator]()',
    },
    {
        path: 'lib/javascript/global_objects/array/symbol.species/index.md',
        title: 'Array[Symbol.species]',
    },
    {
        path: 'lib/javascript/global_objects/array/symbol.unscopables/index.md',
        title: 'Array.prototype[Symbol.unscopables]',
    },
    {
        path: 'lib/javascript/global_objects/array/tolocalestring/index.md',
        title: 'Array.prototype.toLocaleString()',
    },
    {
        path: 'lib/javascript/global_objects/array/toreversed/index.md',
        title: 'Array.prototype.toReversed()',
    },
    {
        path: 'lib/javascript/global_objects/array/tosorted/index.md',
        title: 'Array.prototype.toSorted()',
    },
    {
        path: 'lib/javascript/global_objects/array/tospliced/index.md',
        title: 'Array.prototype.toSpliced()',
    },
    {
        path: 'lib/javascript/global_objects/array/tostring/index.md',
        title: 'Array.prototype.toString()',
    },
    {
        path: 'lib/javascript/global_objects/array/unshift/index.md',
        title: 'Array.prototype.unshift()',
    },
    {
        path: 'lib/javascript/global_objects/array/values/index.md',
        title: 'Array.prototype.values()',
    },
    {
        path: 'lib/javascript/global_objects/array/with/index.md',
        title: 'Array.prototype.with()',
    },
    {
        path: 'lib/javascript/global_objects/arraybuffer/arraybuffer/index.md',
        title: 'ArrayBuffer() constructor',
    },
    {
        path: 'lib/javascript/global_objects/arraybuffer/bytelength/index.md',
        title: 'ArrayBuffer.prototype.byteLength',
    },
    {
        path: 'lib/javascript/global_objects/arraybuffer/detached/index.md',
        title: 'ArrayBuffer.prototype.detached',
    },
    {
        path: 'lib/javascript/global_objects/arraybuffer/index.md',
        title: 'ArrayBuffer',
    },
    {
        path: 'lib/javascript/global_objects/arraybuffer/isview/index.md',
        title: 'ArrayBuffer.isView()',
    },
    {
        path: 'lib/javascript/global_objects/arraybuffer/maxbytelength/index.md',
        title: 'ArrayBuffer.prototype.maxByteLength',
    },
    {
        path: 'lib/javascript/global_objects/arraybuffer/resizable/index.md',
        title: 'ArrayBuffer.prototype.resizable',
    },
    {
        path: 'lib/javascript/global_objects/arraybuffer/resize/index.md',
        title: 'ArrayBuffer.prototype.resize()',
    },
    {
        path: 'lib/javascript/global_objects/arraybuffer/slice/index.md',
        title: 'ArrayBuffer.prototype.slice()',
    },
    {
        path: 'lib/javascript/global_objects/arraybuffer/symbol.species/index.md',
        title: 'ArrayBuffer[Symbol.species]',
    },
    {
        path: 'lib/javascript/global_objects/arraybuffer/transfer/index.md',
        title: 'ArrayBuffer.prototype.transfer()',
    },
    {
        path: 'lib/javascript/global_objects/arraybuffer/transfertofixedlength/index.md',
        title: 'ArrayBuffer.prototype.transferToFixedLength()',
    },
    {
        path: 'lib/javascript/global_objects/asyncfunction/asyncfunction/index.md',
        title: 'AsyncFunction() constructor',
    },
    {
        path: 'lib/javascript/global_objects/asyncfunction/index.md',
        title: 'AsyncFunction',
    },
    {
        path: 'lib/javascript/global_objects/asyncgenerator/index.md',
        title: 'AsyncGenerator',
    },
    {
        path: 'lib/javascript/global_objects/asyncgenerator/next/index.md',
        title: 'AsyncGenerator.prototype.next()',
    },
    {
        path: 'lib/javascript/global_objects/asyncgenerator/return/index.md',
        title: 'AsyncGenerator.prototype.return()',
    },
    {
        path: 'lib/javascript/global_objects/asyncgenerator/throw/index.md',
        title: 'AsyncGenerator.prototype.throw()',
    },
    {
        path: 'lib/javascript/global_objects/asyncgeneratorfunction/asyncgeneratorfunction/index.md',
        title: 'AsyncGeneratorFunction() constructor',
    },
    {
        path: 'lib/javascript/global_objects/asyncgeneratorfunction/index.md',
        title: 'AsyncGeneratorFunction',
    },
    {
        path: 'lib/javascript/global_objects/asyncgeneratorfunction/prototype/index.md',
        title: 'AsyncGeneratorFunction.prototype.prototype',
    },
    {
        path: 'lib/javascript/global_objects/asynciterator/index.md',
        title: 'AsyncIterator',
    },
    {
        path: 'lib/javascript/global_objects/asynciterator/symbol.asynciterator/index.md',
        title: 'AsyncIterator.prototype[Symbol.asyncIterator]()',
    },
    {
        path: 'lib/javascript/global_objects/atomics/add/index.md',
        title: 'Atomics.add()',
    },
    {
        path: 'lib/javascript/global_objects/atomics/and/index.md',
        title: 'Atomics.and()',
    },
    {
        path: 'lib/javascript/global_objects/atomics/compareexchange/index.md',
        title: 'Atomics.compareExchange()',
    },
    {
        path: 'lib/javascript/global_objects/atomics/exchange/index.md',
        title: 'Atomics.exchange()',
    },
    {
        path: 'lib/javascript/global_objects/atomics/index.md',
        title: 'Atomics',
    },
    {
        path: 'lib/javascript/global_objects/atomics/islockfree/index.md',
        title: 'Atomics.isLockFree()',
    },
    {
        path: 'lib/javascript/global_objects/atomics/load/index.md',
        title: 'Atomics.load()',
    },
    {
        path: 'lib/javascript/global_objects/atomics/notify/index.md',
        title: 'Atomics.notify()',
    },
    {
        path: 'lib/javascript/global_objects/atomics/or/index.md',
        title: 'Atomics.or()',
    },
    {
        path: 'lib/javascript/global_objects/atomics/store/index.md',
        title: 'Atomics.store()',
    },
    {
        path: 'lib/javascript/global_objects/atomics/sub/index.md',
        title: 'Atomics.sub()',
    },
    {
        path: 'lib/javascript/global_objects/atomics/wait/index.md',
        title: 'Atomics.wait()',
    },
    {
        path: 'lib/javascript/global_objects/atomics/waitasync/index.md',
        title: 'Atomics.waitAsync()',
    },
    {
        path: 'lib/javascript/global_objects/atomics/xor/index.md',
        title: 'Atomics.xor()',
    },
    {
        path: 'lib/javascript/global_objects/bigint/asintn/index.md',
        title: 'BigInt.asIntN()',
    },
    {
        path: 'lib/javascript/global_objects/bigint/asuintn/index.md',
        title: 'BigInt.asUintN()',
    },
    {
        path: 'lib/javascript/global_objects/bigint/bigint/index.md',
        title: 'BigInt() constructor',
    },
    {
        path: 'lib/javascript/global_objects/bigint/index.md',
        title: 'BigInt',
    },
    {
        path: 'lib/javascript/global_objects/bigint/tolocalestring/index.md',
        title: 'BigInt.prototype.toLocaleString()',
    },
    {
        path: 'lib/javascript/global_objects/bigint/tostring/index.md',
        title: 'BigInt.prototype.toString()',
    },
    {
        path: 'lib/javascript/global_objects/bigint/valueof/index.md',
        title: 'BigInt.prototype.valueOf()',
    },
    {
        path: 'lib/javascript/global_objects/bigint64array/bigint64array/index.md',
        title: 'BigInt64Array() constructor',
    },
    {
        path: 'lib/javascript/global_objects/bigint64array/index.md',
        title: 'BigInt64Array',
    },
    {
        path: 'lib/javascript/global_objects/biguint64array/biguint64array/index.md',
        title: 'BigUint64Array() constructor',
    },
    {
        path: 'lib/javascript/global_objects/biguint64array/index.md',
        title: 'BigUint64Array',
    },
    {
        path: 'lib/javascript/global_objects/boolean/boolean/index.md',
        title: 'Boolean() constructor',
    },
    {
        path: 'lib/javascript/global_objects/boolean/index.md',
        title: 'Boolean',
    },
    {
        path: 'lib/javascript/global_objects/boolean/tostring/index.md',
        title: 'Boolean.prototype.toString()',
    },
    {
        path: 'lib/javascript/global_objects/boolean/valueof/index.md',
        title: 'Boolean.prototype.valueOf()',
    },
    {
        path: 'lib/javascript/global_objects/dataview/buffer/index.md',
        title: 'DataView.prototype.buffer',
    },
    {
        path: 'lib/javascript/global_objects/dataview/bytelength/index.md',
        title: 'DataView.prototype.byteLength',
    },
    {
        path: 'lib/javascript/global_objects/dataview/byteoffset/index.md',
        title: 'DataView.prototype.byteOffset',
    },
    {
        path: 'lib/javascript/global_objects/dataview/dataview/index.md',
        title: 'DataView() constructor',
    },
    {
        path: 'lib/javascript/global_objects/dataview/getbigint64/index.md',
        title: 'DataView.prototype.getBigInt64()',
    },
    {
        path: 'lib/javascript/global_objects/dataview/getbiguint64/index.md',
        title: 'DataView.prototype.getBigUint64()',
    },
    {
        path: 'lib/javascript/global_objects/dataview/getfloat16/index.md',
        title: 'DataView.prototype.getFloat16()',
    },
    {
        path: 'lib/javascript/global_objects/dataview/getfloat32/index.md',
        title: 'DataView.prototype.getFloat32()',
    },
    {
        path: 'lib/javascript/global_objects/dataview/getfloat64/index.md',
        title: 'DataView.prototype.getFloat64()',
    },
    {
        path: 'lib/javascript/global_objects/dataview/getint16/index.md',
        title: 'DataView.prototype.getInt16()',
    },
    {
        path: 'lib/javascript/global_objects/dataview/getint32/index.md',
        title: 'DataView.prototype.getInt32()',
    },
    {
        path: 'lib/javascript/global_objects/dataview/getint8/index.md',
        title: 'DataView.prototype.getInt8()',
    },
    {
        path: 'lib/javascript/global_objects/dataview/getuint16/index.md',
        title: 'DataView.prototype.getUint16()',
    },
    {
        path: 'lib/javascript/global_objects/dataview/getuint32/index.md',
        title: 'DataView.prototype.getUint32()',
    },
    {
        path: 'lib/javascript/global_objects/dataview/getuint8/index.md',
        title: 'DataView.prototype.getUint8()',
    },
    {
        path: 'lib/javascript/global_objects/dataview/index.md',
        title: 'DataView',
    },
    {
        path: 'lib/javascript/global_objects/dataview/setbigint64/index.md',
        title: 'DataView.prototype.setBigInt64()',
    },
    {
        path: 'lib/javascript/global_objects/dataview/setbiguint64/index.md',
        title: 'DataView.prototype.setBigUint64()',
    },
    {
        path: 'lib/javascript/global_objects/dataview/setfloat16/index.md',
        title: 'DataView.prototype.setFloat16()',
    },
    {
        path: 'lib/javascript/global_objects/dataview/setfloat32/index.md',
        title: 'DataView.prototype.setFloat32()',
    },
    {
        path: 'lib/javascript/global_objects/dataview/setfloat64/index.md',
        title: 'DataView.prototype.setFloat64()',
    },
    {
        path: 'lib/javascript/global_objects/dataview/setint16/index.md',
        title: 'DataView.prototype.setInt16()',
    },
    {
        path: 'lib/javascript/global_objects/dataview/setint32/index.md',
        title: 'DataView.prototype.setInt32()',
    },
    {
        path: 'lib/javascript/global_objects/dataview/setint8/index.md',
        title: 'DataView.prototype.setInt8()',
    },
    {
        path: 'lib/javascript/global_objects/dataview/setuint16/index.md',
        title: 'DataView.prototype.setUint16()',
    },
    {
        path: 'lib/javascript/global_objects/dataview/setuint32/index.md',
        title: 'DataView.prototype.setUint32()',
    },
    {
        path: 'lib/javascript/global_objects/dataview/setuint8/index.md',
        title: 'DataView.prototype.setUint8()',
    },
    {
        path: 'lib/javascript/global_objects/date/date/index.md',
        title: 'Date() constructor',
    },
    {
        path: 'lib/javascript/global_objects/date/getdate/index.md',
        title: 'Date.prototype.getDate()',
    },
    {
        path: 'lib/javascript/global_objects/date/getday/index.md',
        title: 'Date.prototype.getDay()',
    },
    {
        path: 'lib/javascript/global_objects/date/getfullyear/index.md',
        title: 'Date.prototype.getFullYear()',
    },
    {
        path: 'lib/javascript/global_objects/date/gethours/index.md',
        title: 'Date.prototype.getHours()',
    },
    {
        path: 'lib/javascript/global_objects/date/getmilliseconds/index.md',
        title: 'Date.prototype.getMilliseconds()',
    },
    {
        path: 'lib/javascript/global_objects/date/getminutes/index.md',
        title: 'Date.prototype.getMinutes()',
    },
    {
        path: 'lib/javascript/global_objects/date/getmonth/index.md',
        title: 'Date.prototype.getMonth()',
    },
    {
        path: 'lib/javascript/global_objects/date/getseconds/index.md',
        title: 'Date.prototype.getSeconds()',
    },
    {
        path: 'lib/javascript/global_objects/date/gettime/index.md',
        title: 'Date.prototype.getTime()',
    },
    {
        path: 'lib/javascript/global_objects/date/gettimezoneoffset/index.md',
        title: 'Date.prototype.getTimezoneOffset()',
    },
    {
        path: 'lib/javascript/global_objects/date/getutcdate/index.md',
        title: 'Date.prototype.getUTCDate()',
    },
    {
        path: 'lib/javascript/global_objects/date/getutcday/index.md',
        title: 'Date.prototype.getUTCDay()',
    },
    {
        path: 'lib/javascript/global_objects/date/getutcfullyear/index.md',
        title: 'Date.prototype.getUTCFullYear()',
    },
    {
        path: 'lib/javascript/global_objects/date/getutchours/index.md',
        title: 'Date.prototype.getUTCHours()',
    },
    {
        path: 'lib/javascript/global_objects/date/getutcmilliseconds/index.md',
        title: 'Date.prototype.getUTCMilliseconds()',
    },
    {
        path: 'lib/javascript/global_objects/date/getutcminutes/index.md',
        title: 'Date.prototype.getUTCMinutes()',
    },
    {
        path: 'lib/javascript/global_objects/date/getutcmonth/index.md',
        title: 'Date.prototype.getUTCMonth()',
    },
    {
        path: 'lib/javascript/global_objects/date/getutcseconds/index.md',
        title: 'Date.prototype.getUTCSeconds()',
    },
    {
        path: 'lib/javascript/global_objects/date/getyear/index.md',
        title: 'Date.prototype.getYear()',
    },
    {
        path: 'lib/javascript/global_objects/date/index.md',
        title: 'Date',
    },
    {
        path: 'lib/javascript/global_objects/date/now/index.md',
        title: 'Date.now()',
    },
    {
        path: 'lib/javascript/global_objects/date/parse/index.md',
        title: 'Date.parse()',
    },
    {
        path: 'lib/javascript/global_objects/date/setdate/index.md',
        title: 'Date.prototype.setDate()',
    },
    {
        path: 'lib/javascript/global_objects/date/setfullyear/index.md',
        title: 'Date.prototype.setFullYear()',
    },
    {
        path: 'lib/javascript/global_objects/date/sethours/index.md',
        title: 'Date.prototype.setHours()',
    },
    {
        path: 'lib/javascript/global_objects/date/setmilliseconds/index.md',
        title: 'Date.prototype.setMilliseconds()',
    },
    {
        path: 'lib/javascript/global_objects/date/setminutes/index.md',
        title: 'Date.prototype.setMinutes()',
    },
    {
        path: 'lib/javascript/global_objects/date/setmonth/index.md',
        title: 'Date.prototype.setMonth()',
    },
    {
        path: 'lib/javascript/global_objects/date/setseconds/index.md',
        title: 'Date.prototype.setSeconds()',
    },
    {
        path: 'lib/javascript/global_objects/date/settime/index.md',
        title: 'Date.prototype.setTime()',
    },
    {
        path: 'lib/javascript/global_objects/date/setutcdate/index.md',
        title: 'Date.prototype.setUTCDate()',
    },
    {
        path: 'lib/javascript/global_objects/date/setutcfullyear/index.md',
        title: 'Date.prototype.setUTCFullYear()',
    },
    {
        path: 'lib/javascript/global_objects/date/setutchours/index.md',
        title: 'Date.prototype.setUTCHours()',
    },
    {
        path: 'lib/javascript/global_objects/date/setutcmilliseconds/index.md',
        title: 'Date.prototype.setUTCMilliseconds()',
    },
    {
        path: 'lib/javascript/global_objects/date/setutcminutes/index.md',
        title: 'Date.prototype.setUTCMinutes()',
    },
    {
        path: 'lib/javascript/global_objects/date/setutcmonth/index.md',
        title: 'Date.prototype.setUTCMonth()',
    },
    {
        path: 'lib/javascript/global_objects/date/setutcseconds/index.md',
        title: 'Date.prototype.setUTCSeconds()',
    },
    {
        path: 'lib/javascript/global_objects/date/setyear/index.md',
        title: 'Date.prototype.setYear()',
    },
    {
        path: 'lib/javascript/global_objects/date/symbol.toprimitive/index.md',
        title: 'Date.prototype[Symbol.toPrimitive]()',
    },
    {
        path: 'lib/javascript/global_objects/date/todatestring/index.md',
        title: 'Date.prototype.toDateString()',
    },
    {
        path: 'lib/javascript/global_objects/date/toisostring/index.md',
        title: 'Date.prototype.toISOString()',
    },
    {
        path: 'lib/javascript/global_objects/date/tojson/index.md',
        title: 'Date.prototype.toJSON()',
    },
    {
        path: 'lib/javascript/global_objects/date/tolocaledatestring/index.md',
        title: 'Date.prototype.toLocaleDateString()',
    },
    {
        path: 'lib/javascript/global_objects/date/tolocalestring/index.md',
        title: 'Date.prototype.toLocaleString()',
    },
    {
        path: 'lib/javascript/global_objects/date/tolocaletimestring/index.md',
        title: 'Date.prototype.toLocaleTimeString()',
    },
    {
        path: 'lib/javascript/global_objects/date/tostring/index.md',
        title: 'Date.prototype.toString()',
    },
    {
        path: 'lib/javascript/global_objects/date/totimestring/index.md',
        title: 'Date.prototype.toTimeString()',
    },
    {
        path: 'lib/javascript/global_objects/date/toutcstring/index.md',
        title: 'Date.prototype.toUTCString()',
    },
    {
        path: 'lib/javascript/global_objects/date/utc/index.md',
        title: 'Date.UTC()',
    },
    {
        path: 'lib/javascript/global_objects/date/valueof/index.md',
        title: 'Date.prototype.valueOf()',
    },
    {
        path: 'lib/javascript/global_objects/decodeuri/index.md',
        title: 'decodeURI()',
    },
    {
        path: 'lib/javascript/global_objects/decodeuricomponent/index.md',
        title: 'decodeURIComponent()',
    },
    {
        path: 'lib/javascript/global_objects/encodeuri/index.md',
        title: 'encodeURI()',
    },
    {
        path: 'lib/javascript/global_objects/encodeuricomponent/index.md',
        title: 'encodeURIComponent()',
    },
    {
        path: 'lib/javascript/global_objects/error/cause/index.md',
        title: 'Error: cause',
    },
    {
        path: 'lib/javascript/global_objects/error/columnnumber/index.md',
        title: 'Error: columnNumber',
    },
    {
        path: 'lib/javascript/global_objects/error/error/index.md',
        title: 'Error() constructor',
    },
    {
        path: 'lib/javascript/global_objects/error/filename/index.md',
        title: 'Error: fileName',
    },
    {
        path: ' lib/javascript/global_objects/error/index.md',
        title: 'Error',
    },
    {
        path: 'lib/javascript/global_objects/error/linenumber/index.md',
        title: 'Error: lineNumber',
    },
    {
        path: 'lib/javascript/global_objects/error/message/index.md',
        title: 'Error: message',
    },
    {
        path: 'lib/javascript/global_objects/error/name/index.md',
        title: 'Error.prototype.name',
    },
    {
        path: 'lib/javascript/global_objects/error/stack/index.md',
        title: 'Error.prototype.stack',
    },
    {
        path: 'lib/javascript/global_objects/error/tostring/index.md',
        title: 'Error.prototype.toString()',
    },
    {
        path: 'lib/javascript/global_objects/escape/index.md',
        title: 'escape()',
    },
    {
        path: 'lib/javascript/global_objects/eval/index.md',
        title: 'eval()',
    },
    {
        path: 'lib/javascript/global_objects/evalerror/evalerror/index.md',
        title: 'EvalError() constructor',
    },
    {
        path: 'lib/javascript/global_objects/evalerror/index.md',
        title: 'EvalError',
    },
    {
        path: 'lib/javascript/global_objects/finalizationregistry/finalizationregistry/index.md',
        title: 'FinalizationRegistry() constructor',
    },
    {
        path: 'lib/javascript/global_objects/finalizationregistry/index.md',
        title: 'FinalizationRegistry',
    },
    {
        path: 'lib/javascript/global_objects/finalizationregistry/register/index.md',
        title: 'FinalizationRegistry.prototype.register()',
    },
    {
        path: 'lib/javascript/global_objects/finalizationregistry/unregister/index.md',
        title: 'FinalizationRegistry.prototype.unregister()',
    },
    {
        path: 'lib/javascript/global_objects/float16array/float16array/index.md',
        title: 'Float16Array() constructor',
    },
    {
        path: 'lib/javascript/global_objects/float16array/index.md',
        title: 'Float16Array',
    },
    {
        path: 'lib/javascript/global_objects/float32array/float32array/index.md',
        title: 'Float32Array() constructor',
    },
    {
        path: 'lib/javascript/global_objects/float32array/index.md',
        title: 'Float32Array',
    },
    {
        path: 'lib/javascript/global_objects/float64array/float64array/index.md',
        title: 'Float64Array() constructor',
    },
    {
        path: 'lib/javascript/global_objects/float64array/index.md',
        title: 'Float64Array',
    },
    {
        path: 'lib/javascript/global_objects/function/apply/index.md',
        title: 'Function.prototype.apply()',
    },
    {
        path: 'lib/javascript/global_objects/function/arguments/index.md',
        title: 'Function.prototype.arguments',
    },
    {
        path: 'lib/javascript/global_objects/function/bind/index.md',
        title: 'Function.prototype.bind()',
    },
    {
        path: 'lib/javascript/global_objects/function/call/index.md',
        title: 'Function.prototype.call()',
    },
    {
        path: 'lib/javascript/global_objects/function/caller/index.md',
        title: 'Function.prototype.caller',
    },
    {
        path: 'lib/javascript/global_objects/function/displayname/index.md',
        title: 'Function: displayName',
    },
    {
        path: 'lib/javascript/global_objects/function/function/index.md',
        title: 'Function() constructor',
    },
    {
        path: 'lib/javascript/global_objects/function/index.md',
        title: 'Function',
    },
    {
        path: 'lib/javascript/global_objects/function/length/index.md',
        title: 'Function: length',
    },
    {
        path: 'lib/javascript/global_objects/function/name/index.md',
        title: 'Function: name',
    },
    {
        path: 'lib/javascript/global_objects/function/prototype/index.md',
        title: 'Function: prototype',
    },
    {
        path: 'lib/javascript/global_objects/function/symbol.hasinstance/index.md',
        title: 'Function.prototype[Symbol.hasInstance]()',
    },
    {
        path: 'lib/javascript/global_objects/function/tostring/index.md',
        title: 'Function.prototype.toString()',
    },
    {
        path: 'lib/javascript/global_objects/generator/index.md',
        title: 'Generator',
    },
    {
        path: 'lib/javascript/global_objects/generator/next/index.md',
        title: 'Generator.prototype.next()',
    },
    {
        path: 'lib/javascript/global_objects/generator/return/index.md',
        title: 'Generator.prototype.return()',
    },
    {
        path: 'lib/javascript/global_objects/generator/throw/index.md',
        title: 'Generator.prototype.throw()',
    },
    {
        path: 'lib/javascript/global_objects/generatorfunction/generatorfunction/index.md',
        title: 'GeneratorFunction() constructor',
    },
    {
        path: 'lib/javascript/global_objects/generatorfunction/index.md',
        title: 'GeneratorFunction',
    },
    {
        path: 'lib/javascript/global_objects/generatorfunction/prototype/index.md',
        title: 'GeneratorFunction.prototype.prototype',
    },
    {
        path: 'lib/javascript/global_objects/globalthis/index.md',
        title: 'globalThis',
    },
    {
        path: 'lib/javascript/global_objects/index.md',
        title: 'Standard built-in objects',
    },
    {
        path: 'lib/javascript/global_objects/infinity/index.md',
        title: 'Infinity',
    },
    {
        path: 'lib/javascript/global_objects/int16array/index.md',
        title: 'Int16Array',
    },
    {
        path: 'lib/javascript/global_objects/int16array/int16array/index.md',
        title: 'Int16Array() constructor',
    },
    {
        path: 'lib/javascript/global_objects/int32array/index.md',
        title: 'Int32Array',
    },
    {
        path: 'lib/javascript/global_objects/int32array/int32array/index.md',
        title: 'Int32Array() constructor',
    },
    {
        path: 'lib/javascript/global_objects/int8array/index.md',
        title: 'Int8Array',
    },
    {
        path: 'lib/javascript/global_objects/int8array/int8array/index.md',
        title: 'Int8Array() constructor',
    },
    {
        path: 'lib/javascript/global_objects/internalerror/index.md',
        title: 'InternalError',
    },
    {
        path: 'lib/javascript/global_objects/internalerror/internalerror/index.md',
        title: 'InternalError() constructor',
    },
    {
        path: 'lib/javascript/global_objects/intl/collator/collator/index.md',
        title: 'Intl.Collator() constructor',
    },
    {
        path: 'lib/javascript/global_objects/intl/collator/compare/index.md',
        title: 'Intl.Collator.prototype.compare()',
    },
    {
        path: 'lib/javascript/global_objects/intl/collator/index.md',
        title: 'Intl.Collator',
    },
    {
        path: 'lib/javascript/global_objects/intl/collator/resolvedoptions/index.md',
        title: 'Intl.Collator.prototype.resolvedOptions()',
    },
    {
        path: 'lib/javascript/global_objects/intl/collator/supportedlocalesof/index.md',
        title: 'Intl.Collator.supportedLocalesOf()',
    },
    {
        path: 'lib/javascript/global_objects/intl/datetimeformat/datetimeformat/index.md',
        title: 'Intl.DateTimeFormat() constructor',
    },
    {
        path: 'lib/javascript/global_objects/intl/datetimeformat/format/index.md',
        title: 'Intl.DateTimeFormat.prototype.format()',
    },
    {
        path: 'lib/javascript/global_objects/intl/datetimeformat/formatrange/index.md',
        title: 'Intl.DateTimeFormat.prototype.formatRange()',
    },
    {
        path: 'lib/javascript/global_objects/intl/datetimeformat/formatrangetoparts/index.md',
        title: 'Intl.DateTimeFormat.prototype.formatRangeToParts()',
    },
    {
        path: 'lib/javascript/global_objects/intl/datetimeformat/formattoparts/index.md',
        title: 'Intl.DateTimeFormat.prototype.formatToParts()',
    },
    {
        path: 'lib/javascript/global_objects/intl/datetimeformat/index.md',
        title: 'Intl.DateTimeFormat',
    },
    {
        path: 'lib/javascript/global_objects/intl/datetimeformat/resolvedoptions/index.md',
        title: 'Intl.DateTimeFormat.prototype.resolvedOptions()',
    },
    {
        path: 'lib/javascript/global_objects/intl/datetimeformat/supportedlocalesof/index.md',
        title: 'Intl.DateTimeFormat.supportedLocalesOf()',
    },
    {
        path: 'lib/javascript/global_objects/intl/displaynames/displaynames/index.md',
        title: 'Intl.DisplayNames() constructor',
    },
    {
        path: 'lib/javascript/global_objects/intl/displaynames/index.md',
        title: 'Intl.DisplayNames',
    },
    {
        path: 'lib/javascript/global_objects/intl/displaynames/of/index.md',
        title: 'Intl.DisplayNames.prototype.of()',
    },
    {
        path: 'lib/javascript/global_objects/intl/displaynames/resolvedoptions/index.md',
        title: 'Intl.DisplayNames.prototype.resolvedOptions()',
    },
    {
        path: 'lib/javascript/global_objects/intl/displaynames/supportedlocalesof/index.md',
        title: 'Intl.DisplayNames.supportedLocalesOf()',
    },
    {
        path: 'lib/javascript/global_objects/intl/durationformat/durationformat/index.md',
        title: 'Intl.DurationFormat() constructor',
    },
    {
        path: 'lib/javascript/global_objects/intl/durationformat/format/index.md',
        title: 'Intl.DurationFormat.prototype.format()',
    },
    {
        path: 'lib/javascript/global_objects/intl/durationformat/formattoparts/index.md',
        title: 'Intl.DurationFormat.prototype.formatToParts()',
    },
    {
        path: 'lib/javascript/global_objects/intl/durationformat/index.md',
        title: 'Intl.DurationFormat',
    },
    {
        path: 'lib/javascript/global_objects/intl/durationformat/resolvedoptions/index.md',
        title: 'Intl.DurationFormat.prototype.resolvedOptions()',
    },
    {
        path: 'lib/javascript/global_objects/intl/durationformat/supportedlocalesof/index.md',
        title: 'Intl.DurationFormat.supportedLocalesOf()',
    },
    {
        path: 'lib/javascript/global_objects/intl/getcanonicallocales/index.md',
        title: 'Intl.getCanonicalLocales()',
    },
    {
        path: 'lib/javascript/global_objects/intl/index.md',
        title: 'Intl',
    },
    {
        path: 'lib/javascript/global_objects/intl/listformat/format/index.md',
        title: 'Intl.ListFormat.prototype.format()',
    },
    {
        path: 'lib/javascript/global_objects/intl/listformat/formattoparts/index.md',
        title: 'Intl.ListFormat.prototype.formatToParts()',
    },
    {
        path: 'lib/javascript/global_objects/intl/listformat/index.md',
        title: 'Intl.ListFormat',
    },
    {
        path: 'lib/javascript/global_objects/intl/listformat/listformat/index.md',
        title: 'Intl.ListFormat() constructor',
    },
    {
        path: 'lib/javascript/global_objects/intl/listformat/resolvedoptions/index.md',
        title: 'Intl.ListFormat.prototype.resolvedOptions()',
    },
    {
        path: 'lib/javascript/global_objects/intl/listformat/supportedlocalesof/index.md',
        title: 'Intl.ListFormat.supportedLocalesOf()',
    },
    {
        path: 'lib/javascript/global_objects/intl/locale/basename/index.md',
        title: 'Intl.Locale.prototype.baseName',
    },
    {
        path: 'lib/javascript/global_objects/intl/locale/calendar/index.md',
        title: 'Intl.Locale.prototype.calendar',
    },
    {
        path: 'lib/javascript/global_objects/intl/locale/casefirst/index.md',
        title: 'Intl.Locale.prototype.caseFirst',
    },
    {
        path: 'lib/javascript/global_objects/intl/locale/collation/index.md',
        title: 'Intl.Locale.prototype.collation',
    },
    {
        path: 'lib/javascript/global_objects/intl/locale/getcalendars/index.md',
        title: 'Intl.Locale.prototype.getCalendars()',
    },
    {
        path: 'lib/javascript/global_objects/intl/locale/getcollations/index.md',
        title: 'Intl.Locale.prototype.getCollations()',
    },
    {
        path: 'lib/javascript/global_objects/intl/locale/gethourcycles/index.md',
        title: 'Intl.Locale.prototype.getHourCycles()',
    },
    {
        path: 'lib/javascript/global_objects/intl/locale/getnumberingsystems/index.md',
        title: 'Intl.Locale.prototype.getNumberingSystems()',
    },
    {
        path: 'lib/javascript/global_objects/intl/locale/gettextinfo/index.md',
        title: 'Intl.Locale.prototype.getTextInfo()',
    },
    {
        path: 'lib/javascript/global_objects/intl/locale/gettimezones/index.md',
        title: 'Intl.Locale.prototype.getTimeZones()',
    },
    {
        path: 'lib/javascript/global_objects/intl/locale/getweekinfo/index.md',
        title: 'Intl.Locale.prototype.getWeekInfo()',
    },
    {
        path: 'lib/javascript/global_objects/intl/locale/hourcycle/index.md',
        title: 'Intl.Locale.prototype.hourCycle',
    },
    {
        path: 'lib/javascript/global_objects/intl/locale/index.md',
        title: 'Intl.Locale',
    },
    {
        path: 'lib/javascript/global_objects/intl/locale/language/index.md',
        title: 'Intl.Locale.prototype.language',
    },
    {
        path: 'lib/javascript/global_objects/intl/locale/locale/index.md',
        title: 'Intl.Locale() constructor',
    },
    {
        path: 'lib/javascript/global_objects/intl/locale/maximize/index.md',
        title: 'Intl.Locale.prototype.maximize()',
    },
    {
        path: 'lib/javascript/global_objects/intl/locale/minimize/index.md',
        title: 'Intl.Locale.prototype.minimize()',
    },
    {
        path: 'lib/javascript/global_objects/intl/locale/numberingsystem/index.md',
        title: 'Intl.Locale.prototype.numberingSystem',
    },
    {
        path: 'lib/javascript/global_objects/intl/locale/numeric/index.md',
        title: 'Intl.Locale.prototype.numeric',
    },
    {
        path: 'lib/javascript/global_objects/intl/locale/region/index.md',
        title: 'Intl.Locale.prototype.region',
    },
    {
        path: 'lib/javascript/global_objects/intl/locale/script/index.md',
        title: 'Intl.Locale.prototype.script',
    },
    {
        path: 'lib/javascript/global_objects/intl/locale/tostring/index.md',
        title: 'Intl.Locale.prototype.toString()',
    },
    {
        path: 'lib/javascript/global_objects/intl/numberformat/format/index.md',
        title: 'Intl.NumberFormat.prototype.format()',
    },
    {
        path: 'lib/javascript/global_objects/intl/numberformat/formatrange/index.md',
        title: 'Intl.NumberFormat.prototype.formatRange()',
    },
    {
        path: 'lib/javascript/global_objects/intl/numberformat/formatrangetoparts/index.md',
        title: 'Intl.NumberFormat.prototype.formatRangeToParts()',
    },
    {
        path: 'lib/javascript/global_objects/intl/numberformat/formattoparts/index.md',
        title: 'Intl.NumberFormat.prototype.formatToParts()',
    },
    {
        path: 'lib/javascript/global_objects/intl/numberformat/index.md',
        title: 'Intl.NumberFormat',
    },
    {
        path: 'lib/javascript/global_objects/intl/numberformat/numberformat/index.md',
        title: 'Intl.NumberFormat() constructor',
    },
    {
        path: 'lib/javascript/global_objects/intl/numberformat/resolvedoptions/index.md',
        title: 'Intl.NumberFormat.prototype.resolvedOptions()',
    },
    {
        path: 'lib/javascript/global_objects/intl/numberformat/supportedlocalesof/index.md',
        title: 'Intl.NumberFormat.supportedLocalesOf()',
    },
    {
        path: 'lib/javascript/global_objects/intl/pluralrules/index.md',
        title: 'Intl.PluralRules',
    },
    {
        path: 'lib/javascript/global_objects/intl/pluralrules/pluralrules/index.md',
        title: 'Intl.PluralRules() constructor',
    },
    {
        path: 'lib/javascript/global_objects/intl/pluralrules/resolvedoptions/index.md',
        title: 'Intl.PluralRules.prototype.resolvedOptions()',
    },
    {
        path: 'lib/javascript/global_objects/intl/pluralrules/select/index.md',
        title: 'Intl.PluralRules.prototype.select()',
    },
    {
        path: 'lib/javascript/global_objects/intl/pluralrules/selectrange/index.md',
        title: 'Intl.PluralRules.prototype.selectRange()',
    },
    {
        path: 'lib/javascript/global_objects/intl/pluralrules/supportedlocalesof/index.md',
        title: 'Intl.PluralRules.supportedLocalesOf()',
    },
    {
        path: 'lib/javascript/global_objects/intl/relativetimeformat/format/index.md',
        title: 'Intl.RelativeTimeFormat.prototype.format()',
    },
    {
        path: 'lib/javascript/global_objects/intl/relativetimeformat/formattoparts/index.md',
        title: 'Intl.RelativeTimeFormat.prototype.formatToParts()',
    },
    {
        path: 'lib/javascript/global_objects/intl/relativetimeformat/index.md',
        title: 'Intl.RelativeTimeFormat',
    },
    {
        path: 'lib/javascript/global_objects/intl/relativetimeformat/relativetimeformat/index.md',
        title: 'Intl.RelativeTimeFormat() constructor',
    },
    {
        path: 'lib/javascript/global_objects/intl/relativetimeformat/resolvedoptions/index.md',
        title: 'Intl.RelativeTimeFormat.prototype.resolvedOptions()',
    },
    {
        path: 'lib/javascript/global_objects/intl/relativetimeformat/supportedlocalesof/index.md',
        title: 'Intl.RelativeTimeFormat.supportedLocalesOf()',
    },
    {
        path: 'lib/javascript/global_objects/intl/segmenter/index.md',
        title: 'Intl.Segmenter',
    },
    {
        path: 'lib/javascript/global_objects/intl/segmenter/resolvedoptions/index.md',
        title: 'Intl.Segmenter.prototype.resolvedOptions()',
    },
    {
        path: 'lib/javascript/global_objects/intl/segmenter/segment/index.md',
        title: 'Intl.Segmenter.prototype.segment()',
    },
    {
        path: 'lib/javascript/global_objects/intl/segmenter/segment/segments/containing/index.md',
        title: 'Segments.prototype.containing()',
    },
    {
        path: 'lib/javascript/global_objects/intl/segmenter/segment/segments/index.md',
        title: 'Segments',
    },
    {
        path: 'lib/javascript/global_objects/intl/segmenter/segment/segments/symbol.iterator/index.md',
        title: 'Segments.prototype[Symbol.iterator]()',
    },
    {
        path: 'lib/javascript/global_objects/intl/segmenter/segmenter/index.md',
        title: 'Intl.Segmenter() constructor',
    },
    {
        path: 'lib/javascript/global_objects/intl/segmenter/supportedlocalesof/index.md',
        title: 'Intl.Segmenter.supportedLocalesOf()',
    },
    {
        path: 'lib/javascript/global_objects/intl/supportedvaluesof/index.md',
        title: 'Intl.supportedValuesOf()',
    },
    {
        path: 'lib/javascript/global_objects/isfinite/index.md',
        title: 'isFinite()',
    },
    {
        path: 'lib/javascript/global_objects/isnan/index.md',
        title: 'isNaN()',
    },
    {
        path: 'lib/javascript/global_objects/iterator/drop/index.md',
        title: 'Iterator.prototype.drop()',
    },
    {
        path: 'lib/javascript/global_objects/iterator/every/index.md',
        title: 'Iterator.prototype.every()',
    },
    {
        path: 'lib/javascript/global_objects/iterator/filter/index.md',
        title: 'Iterator.prototype.filter()',
    },
    {
        path: 'lib/javascript/global_objects/iterator/find/index.md',
        title: 'Iterator.prototype.find()',
    },
    {
        path: 'lib/javascript/global_objects/iterator/flatmap/index.md',
        title: 'Iterator.prototype.flatMap()',
    },
    {
        path: 'lib/javascript/global_objects/iterator/foreach/index.md',
        title: 'Iterator.prototype.forEach()',
    },
    {
        path: 'lib/javascript/global_objects/iterator/from/index.md',
        title: 'Iterator.from()',
    },
    {
        path: 'lib/javascript/global_objects/iterator/index.md',
        title: 'Iterator',
    },
    {
        path: 'lib/javascript/global_objects/iterator/iterator/index.md',
        title: 'Iterator() constructor',
    },
    {
        path: 'lib/javascript/global_objects/iterator/map/index.md',
        title: 'Iterator.prototype.map()',
    },
    {
        path: 'lib/javascript/global_objects/iterator/reduce/index.md',
        title: 'Iterator.prototype.reduce()',
    },
    {
        path: 'lib/javascript/global_objects/iterator/some/index.md',
        title: 'Iterator.prototype.some()',
    },
    {
        path: 'lib/javascript/global_objects/iterator/symbol.iterator/index.md',
        title: 'Iterator.prototype[Symbol.iterator]()',
    },
    {
        path: 'lib/javascript/global_objects/iterator/take/index.md',
        title: 'Iterator.prototype.take()',
    },
    {
        path: 'lib/javascript/global_objects/iterator/toarray/index.md',
        title: 'Iterator.prototype.toArray()',
    },
    {
        path: 'lib/javascript/global_objects/json/index.md',
        title: 'JSON',
    },
    {
        path: 'lib/javascript/global_objects/json/israwjson/index.md',
        title: 'JSON.isRawJSON()',
    },
    {
        path: 'lib/javascript/global_objects/json/parse/index.md',
        title: 'JSON.parse()',
    },
    {
        path: 'lib/javascript/global_objects/json/rawjson/index.md',
        title: 'JSON.rawJSON()',
    },
    {
        path: 'lib/javascript/global_objects/json/stringify/index.md',
        title: 'JSON.stringify()',
    },
    {
        path: 'lib/javascript/global_objects/map/clear/index.md',
        title: 'Map.prototype.clear()',
    },
    {
        path: 'lib/javascript/global_objects/map/delete/index.md',
        title: 'Map.prototype.delete()',
    },
    {
        path: 'lib/javascript/global_objects/map/entries/index.md',
        title: 'Map.prototype.entries()',
    },
    {
        path: 'lib/javascript/global_objects/map/foreach/index.md',
        title: 'Map.prototype.forEach()',
    },
    {
        path: 'lib/javascript/global_objects/map/get/index.md',
        title: 'Map.prototype.get()',
    },
    {
        path: 'lib/javascript/global_objects/map/groupby/index.md',
        title: 'Map.groupBy()',
    },
    {
        path: 'lib/javascript/global_objects/map/has/index.md',
        title: 'Map.prototype.has()',
    },
    {
        path: 'lib/javascript/global_objects/map/index.md',
        title: 'Map',
    },
    {
        path: 'lib/javascript/global_objects/map/keys/index.md',
        title: 'Map.prototype.keys()',
    },
    {
        path: 'lib/javascript/global_objects/map/map/index.md',
        title: 'Map() constructor',
    },
    {
        path: 'lib/javascript/global_objects/map/set/index.md',
        title: 'Map.prototype.set()',
    },
    {
        path: 'lib/javascript/global_objects/map/size/index.md',
        title: 'Map.prototype.size',
    },
    {
        path: 'lib/javascript/global_objects/map/symbol.iterator/index.md',
        title: 'Map.prototype[Symbol.iterator]()',
    },
    {
        path: 'lib/javascript/global_objects/map/symbol.species/index.md',
        title: 'Map[Symbol.species]',
    },
    {
        path: 'lib/javascript/global_objects/map/values/index.md',
        title: 'Map.prototype.values()',
    },
    {
        path: 'lib/javascript/global_objects/math/abs/index.md',
        title: 'Math.abs()',
    },
    {
        path: 'lib/javascript/global_objects/math/acos/index.md',
        title: 'Math.acos()',
    },
    {
        path: 'lib/javascript/global_objects/math/acosh/index.md',
        title: 'Math.acosh()',
    },
    {
        path: 'lib/javascript/global_objects/math/asin/index.md',
        title: 'Math.asin()',
    },
    {
        path: 'lib/javascript/global_objects/math/asinh/index.md',
        title: 'Math.asinh()',
    },
    {
        path: 'lib/javascript/global_objects/math/atan/index.md',
        title: 'Math.atan()',
    },
    {
        path: 'lib/javascript/global_objects/math/atan2/index.md',
        title: 'Math.atan2()',
    },
    {
        path: 'lib/javascript/global_objects/math/atanh/index.md',
        title: 'Math.atanh()',
    },
    {
        path: 'lib/javascript/global_objects/math/cbrt/index.md',
        title: 'Math.cbrt()',
    },
    {
        path: 'lib/javascript/global_objects/math/ceil/index.md',
        title: 'Math.ceil()',
    },
    {
        path: 'lib/javascript/global_objects/math/clz32/index.md',
        title: 'Math.clz32()',
    },
    {
        path: 'lib/javascript/global_objects/math/cos/index.md',
        title: 'Math.cos()',
    },
    {
        path: 'lib/javascript/global_objects/math/cosh/index.md',
        title: 'Math.cosh()',
    },
    {
        path: 'lib/javascript/global_objects/math/e/index.md',
        title: 'Math.E',
    },
    {
        path: 'lib/javascript/global_objects/math/exp/index.md',
        title: 'Math.exp()',
    },
    {
        path: 'lib/javascript/global_objects/math/expm1/index.md',
        title: 'Math.expm1()',
    },
    {
        path: 'lib/javascript/global_objects/math/f16round/index.md',
        title: 'Math.f16round()',
    },
    {
        path: 'lib/javascript/global_objects/math/floor/index.md',
        title: 'Math.floor()',
    },
    {
        path: 'lib/javascript/global_objects/math/fround/index.md',
        title: 'Math.fround()',
    },
    {
        path: 'lib/javascript/global_objects/math/hypot/index.md',
        title: 'Math.hypot()',
    },
    {
        path: 'lib/javascript/global_objects/math/imul/index.md',
        title: 'Math.imul()',
    },
    {
        path: 'lib/javascript/global_objects/math/index.md',
        title: 'Math',
    },
    {
        path: 'lib/javascript/global_objects/math/ln10/index.md',
        title: 'Math.LN10',
    },
    {
        path: 'lib/javascript/global_objects/math/ln2/index.md',
        title: 'Math.LN2',
    },
    {
        path: 'lib/javascript/global_objects/math/log/index.md',
        title: 'Math.log()',
    },
    {
        path: 'lib/javascript/global_objects/math/log10/index.md',
        title: 'Math.log10()',
    },
    {
        path: 'lib/javascript/global_objects/math/log10e/index.md',
        title: 'Math.LOG10E',
    },
    {
        path: 'lib/javascript/global_objects/math/log1p/index.md',
        title: 'Math.log1p()',
    },
    {
        path: 'lib/javascript/global_objects/math/log2/index.md',
        title: 'Math.log2()',
    },
    {
        path: 'lib/javascript/global_objects/math/log2e/index.md',
        title: 'Math.LOG2E',
    },
    {
        path: 'lib/javascript/global_objects/math/max/index.md',
        title: 'Math.max()',
    },
    {
        path: 'lib/javascript/global_objects/math/min/index.md',
        title: 'Math.min()',
    },
    {
        path: 'lib/javascript/global_objects/math/pi/index.md',
        title: 'Math.PI',
    },
    {
        path: 'lib/javascript/global_objects/math/pow/index.md',
        title: 'Math.pow()',
    },
    {
        path: 'lib/javascript/global_objects/math/random/index.md',
        title: 'Math.random()',
    },
    {
        path: 'lib/javascript/global_objects/math/round/index.md',
        title: 'Math.round()',
    },
    {
        path: 'lib/javascript/global_objects/math/sign/index.md',
        title: 'Math.sign()',
    },
    {
        path: 'lib/javascript/global_objects/math/sin/index.md',
        title: 'Math.sin()',
    },
    {
        path: 'lib/javascript/global_objects/math/sinh/index.md',
        title: 'Math.sinh()',
    },
    {
        path: 'lib/javascript/global_objects/math/sqrt/index.md',
        title: 'Math.sqrt()',
    },
    {
        path: 'lib/javascript/global_objects/math/sqrt1_2/index.md',
        title: 'Math.SQRT1_2',
    },
    {
        path: 'lib/javascript/global_objects/math/sqrt2/index.md',
        title: 'Math.SQRT2',
    },
    {
        path: 'lib/javascript/global_objects/math/tan/index.md',
        title: 'Math.tan()',
    },
    {
        path: 'lib/javascript/global_objects/math/tanh/index.md',
        title: 'Math.tanh()',
    },
    {
        path: 'lib/javascript/global_objects/math/trunc/index.md',
        title: 'Math.trunc()',
    },
    {
        path: 'lib/javascript/global_objects/nan/index.md',
        title: 'NaN',
    },
    {
        path: 'lib/javascript/global_objects/number/epsilon/index.md',
        title: 'Number.EPSILON',
    },
    {
        path: 'lib/javascript/global_objects/number/index.md',
        title: 'Number',
    },
    {
        path: 'lib/javascript/global_objects/number/isfinite/index.md',
        title: 'Number.isFinite()',
    },
    {
        path: 'lib/javascript/global_objects/number/isinteger/index.md',
        title: 'Number.isInteger()',
    },
    {
        path: 'lib/javascript/global_objects/number/isnan/index.md',
        title: 'Number.isNaN()',
    },
    {
        path: 'lib/javascript/global_objects/number/issafeinteger/index.md',
        title: 'Number.isSafeInteger()',
    },
    {
        path: 'lib/javascript/global_objects/number/max_safe_integer/index.md',
        title: 'Number.MAX_SAFE_INTEGER',
    },
    {
        path: 'lib/javascript/global_objects/number/max_value/index.md',
        title: 'Number.MAX_VALUE',
    },
    {
        path: 'lib/javascript/global_objects/number/min_safe_integer/index.md',
        title: 'Number.MIN_SAFE_INTEGER',
    },
    {
        path: 'lib/javascript/global_objects/number/min_value/index.md',
        title: 'Number.MIN_VALUE',
    },
    {
        path: 'lib/javascript/global_objects/number/nan/index.md',
        title: 'Number.NaN',
    },
    {
        path: 'lib/javascript/global_objects/number/negative_infinity/index.md',
        title: 'Number.NEGATIVE_INFINITY',
    },
    {
        path: 'lib/javascript/global_objects/number/number/index.md',
        title: 'Number() constructor',
    },
    {
        path: 'lib/javascript/global_objects/number/parsefloat/index.md',
        title: 'Number.parseFloat()',
    },
    {
        path: 'lib/javascript/global_objects/number/parseint/index.md',
        title: 'Number.parseInt()',
    },
    {
        path: 'lib/javascript/global_objects/number/positive_infinity/index.md',
        title: 'Number.POSITIVE_INFINITY',
    },
    {
        path: 'lib/javascript/global_objects/number/toexponential/index.md',
        title: 'Number.prototype.toExponential()',
    },
    {
        path: 'lib/javascript/global_objects/number/tofixed/index.md',
        title: 'Number.prototype.toFixed()',
    },
    {
        path: 'lib/javascript/global_objects/number/tolocalestring/index.md',
        title: 'Number.prototype.toLocaleString()',
    },
    {
        path: 'lib/javascript/global_objects/number/toprecision/index.md',
        title: 'Number.prototype.toPrecision()',
    },
    {
        path: 'lib/javascript/global_objects/number/tostring/index.md',
        title: 'Number.prototype.toString()',
    },
    {
        path: 'lib/javascript/global_objects/number/valueof/index.md',
        title: 'Number.prototype.valueOf()',
    },
    {
        path: 'lib/javascript/global_objects/object/__definegetter__/index.md',
        title: 'Object.prototype.__defineGetter__()',
    },
    {
        path: 'lib/javascript/global_objects/object/__definesetter__/index.md',
        title: 'Object.prototype.__defineSetter__()',
    },
    {
        path: 'lib/javascript/global_objects/object/__lookupgetter__/index.md',
        title: 'Object.prototype.__lookupGetter__()',
    },
    {
        path: 'lib/javascript/global_objects/object/__lookupsetter__/index.md',
        title: 'Object.prototype.__lookupSetter__()',
    },
    {
        path: 'lib/javascript/global_objects/object/assign/index.md',
        title: 'Object.assign()',
    },
    {
        path: 'lib/javascript/global_objects/object/constructor/index.md',
        title: 'Object.prototype.constructor',
    },
    {
        path: 'lib/javascript/global_objects/object/create/index.md',
        title: 'Object.create()',
    },
    {
        path: 'lib/javascript/global_objects/object/defineproperties/index.md',
        title: 'Object.defineProperties()',
    },
    {
        path: 'lib/javascript/global_objects/object/defineproperty/index.md',
        title: 'Object.defineProperty()',
    },
    {
        path: 'lib/javascript/global_objects/object/entries/index.md',
        title: 'Object.entries()',
    },
    {
        path: 'lib/javascript/global_objects/object/freeze/index.md',
        title: 'Object.freeze()',
    },
    {
        path: 'lib/javascript/global_objects/object/fromentries/index.md',
        title: 'Object.fromEntries()',
    },
    {
        path: 'lib/javascript/global_objects/object/getownpropertydescriptor/index.md',
        title: 'Object.getOwnPropertyDescriptor()',
    },
    {
        path: 'lib/javascript/global_objects/object/getownpropertydescriptors/index.md',
        title: 'Object.getOwnPropertyDescriptors()',
    },
    {
        path: 'lib/javascript/global_objects/object/getownpropertynames/index.md',
        title: 'Object.getOwnPropertyNames()',
    },
    {
        path: 'lib/javascript/global_objects/object/getownpropertysymbols/index.md',
        title: 'Object.getOwnPropertySymbols()',
    },
    {
        path: 'lib/javascript/global_objects/object/getprototypeof/index.md',
        title: 'Object.getPrototypeOf()',
    },
    {
        path: 'lib/javascript/global_objects/object/groupby/index.md',
        title: 'Object.groupBy()',
    },
    {
        path: 'lib/javascript/global_objects/object/hasown/index.md',
        title: 'Object.hasOwn()',
    },
    {
        path: 'lib/javascript/global_objects/object/hasownproperty/index.md',
        title: 'Object.prototype.hasOwnProperty()',
    },
    {
        path: 'lib/javascript/global_objects/object/index.md',
        title: 'Object',
    },
    {
        path: 'lib/javascript/global_objects/object/is/index.md',
        title: 'Object.is()',
    },
    {
        path: 'lib/javascript/global_objects/object/isextensible/index.md',
        title: 'Object.isExtensible()',
    },
    {
        path: 'lib/javascript/global_objects/object/isfrozen/index.md',
        title: 'Object.isFrozen()',
    },
    {
        path: 'lib/javascript/global_objects/object/isprototypeof/index.md',
        title: 'Object.prototype.isPrototypeOf()',
    },
    {
        path: 'lib/javascript/global_objects/object/issealed/index.md',
        title: 'Object.isSealed()',
    },
    {
        path: 'lib/javascript/global_objects/object/keys/index.md',
        title: 'Object.keys()',
    },
    {
        path: 'lib/javascript/global_objects/object/object/index.md',
        title: 'Object() constructor',
    },
    {
        path: 'lib/javascript/global_objects/object/preventextensions/index.md',
        title: 'Object.preventExtensions()',
    },
    {
        path: 'lib/javascript/global_objects/object/propertyisenumerable/index.md',
        title: 'Object.prototype.propertyIsEnumerable()',
    },
    {
        path: 'lib/javascript/global_objects/object/proto/index.md',
        title: 'Object.prototype.__proto__',
    },
    {
        path: 'lib/javascript/global_objects/object/seal/index.md',
        title: 'Object.seal()',
    },
    {
        path: 'lib/javascript/global_objects/object/setprototypeof/index.md',
        title: 'Object.setPrototypeOf()',
    },
    {
        path: 'lib/javascript/global_objects/object/tolocalestring/index.md',
        title: 'Object.prototype.toLocaleString()',
    },
    {
        path: 'lib/javascript/global_objects/object/tostring/index.md',
        title: 'Object.prototype.toString()',
    },
    {
        path: 'lib/javascript/global_objects/object/valueof/index.md',
        title: 'Object.prototype.valueOf()',
    },
    {
        path: 'lib/javascript/global_objects/object/values/index.md',
        title: 'Object.values()',
    },
    {
        path: 'lib/javascript/global_objects/parsefloat/index.md',
        title: 'parseFloat()',
    },
    {
        path: 'lib/javascript/global_objects/parseint/index.md',
        title: 'parseInt()',
    },
    {
        path: 'lib/javascript/global_objects/promise/all/index.md',
        title: 'Promise.all()',
    },
    {
        path: 'lib/javascript/global_objects/promise/allsettled/index.md',
        title: 'Promise.allSettled()',
    },
    {
        path: 'lib/javascript/global_objects/promise/any/index.md',
        title: 'Promise.any()',
    },
    {
        path: 'lib/javascript/global_objects/promise/catch/index.md',
        title: 'Promise.prototype.catch()',
    },
    {
        path: 'lib/javascript/global_objects/promise/finally/index.md',
        title: 'Promise.prototype.finally()',
    },
    {
        path: 'lib/javascript/global_objects/promise/index.md',
        title: 'Promise',
    },
    {
        path: 'lib/javascript/global_objects/promise/promise/index.md',
        title: 'Promise() constructor',
    },
    {
        path: 'lib/javascript/global_objects/promise/race/index.md',
        title: 'Promise.race()',
    },
    {
        path: 'lib/javascript/global_objects/promise/reject/index.md',
        title: 'Promise.reject()',
    },
    {
        path: 'lib/javascript/global_objects/promise/resolve/index.md',
        title: 'Promise.resolve()',
    },
    {
        path: 'lib/javascript/global_objects/promise/symbol.species/index.md',
        title: 'Promise[Symbol.species]',
    },
    {
        path: 'lib/javascript/global_objects/promise/then/index.md',
        title: 'Promise.prototype.then()',
    },
    {
        path: 'lib/javascript/global_objects/promise/try/index.md',
        title: 'Promise.try()',
    },
    {
        path: 'lib/javascript/global_objects/promise/withresolvers/index.md',
        title: 'Promise.withResolvers()',
    },
    {
        path: 'lib/javascript/global_objects/proxy/index.md',
        title: 'Proxy',
    },
    {
        path: 'lib/javascript/global_objects/proxy/proxy/apply/index.md',
        title: 'handler.apply()',
    },
    {
        path: 'lib/javascript/global_objects/proxy/proxy/construct/index.md',
        title: 'handler.construct()',
    },
    {
        path: 'lib/javascript/global_objects/proxy/proxy/defineproperty/index.md',
        title: 'handler.defineProperty()',
    },
    {
        path: 'lib/javascript/global_objects/proxy/proxy/deleteproperty/index.md',
        title: 'handler.deleteProperty()',
    },
    {
        path: 'lib/javascript/global_objects/proxy/proxy/get/index.md',
        title: 'handler.get()',
    },
    {
        path: 'lib/javascript/global_objects/proxy/proxy/getownpropertydescriptor/index.md',
        title: 'handler.getOwnPropertyDescriptor()',
    },
    {
        path: 'lib/javascript/global_objects/proxy/proxy/getprototypeof/index.md',
        title: 'handler.getPrototypeOf()',
    },
    {
        path: 'lib/javascript/global_objects/proxy/proxy/has/index.md',
        title: 'handler.has()',
    },
    {
        path: 'lib/javascript/global_objects/proxy/proxy/index.md',
        title: 'Proxy() constructor',
    },
    {
        path: 'lib/javascript/global_objects/proxy/proxy/isextensible/index.md',
        title: 'handler.isExtensible()',
    },
    {
        path: 'lib/javascript/global_objects/proxy/proxy/ownkeys/index.md',
        title: 'handler.ownKeys()',
    },
    {
        path: 'lib/javascript/global_objects/proxy/proxy/preventextensions/index.md',
        title: 'handler.preventExtensions()',
    },
    {
        path: 'lib/javascript/global_objects/proxy/proxy/set/index.md',
        title: 'handler.set()',
    },
    {
        path: 'lib/javascript/global_objects/proxy/proxy/setprototypeof/index.md',
        title: 'handler.setPrototypeOf()',
    },
    {
        path: 'lib/javascript/global_objects/proxy/revocable/index.md',
        title: 'Proxy.revocable()',
    },
    {
        path: 'lib/javascript/global_objects/rangeerror/index.md',
        title: 'RangeError',
    },
    {
        path: 'lib/javascript/global_objects/rangeerror/rangeerror/index.md',
        title: 'RangeError() constructor',
    },
    {
        path: 'lib/javascript/global_objects/referenceerror/index.md',
        title: 'ReferenceError',
    },
    {
        path: 'lib/javascript/global_objects/referenceerror/referenceerror/index.md',
        title: 'ReferenceError() constructor',
    },
    {
        path: 'lib/javascript/global_objects/reflect/apply/index.md',
        title: 'Reflect.apply()',
    },
    {
        path: 'lib/javascript/global_objects/reflect/construct/index.md',
        title: 'Reflect.construct()',
    },
    {
        path: 'lib/javascript/global_objects/reflect/defineproperty/index.md',
        title: 'Reflect.defineProperty()',
    },
    {
        path: 'lib/javascript/global_objects/reflect/deleteproperty/index.md',
        title: 'Reflect.deleteProperty()',
    },
    {
        path: 'lib/javascript/global_objects/reflect/get/index.md',
        title: 'Reflect.get()',
    },
    {
        path: 'lib/javascript/global_objects/reflect/getownpropertydescriptor/index.md',
        title: 'Reflect.getOwnPropertyDescriptor()',
    },
    {
        path: 'lib/javascript/global_objects/reflect/getprototypeof/index.md',
        title: 'Reflect.getPrototypeOf()',
    },
    {
        path: 'lib/javascript/global_objects/reflect/has/index.md',
        title: 'Reflect.has()',
    },
    {
        path: 'lib/javascript/global_objects/reflect/index.md',
        title: 'Reflect',
    },
    {
        path: 'lib/javascript/global_objects/reflect/isextensible/index.md',
        title: 'Reflect.isExtensible()',
    },
    {
        path: 'lib/javascript/global_objects/reflect/ownkeys/index.md',
        title: 'Reflect.ownKeys()',
    },
    {
        path: 'lib/javascript/global_objects/reflect/preventextensions/index.md',
        title: 'Reflect.preventExtensions()',
    },
    {
        path: 'lib/javascript/global_objects/reflect/set/index.md',
        title: 'Reflect.set()',
    },
    {
        path: 'lib/javascript/global_objects/reflect/setprototypeof/index.md',
        title: 'Reflect.setPrototypeOf()',
    },
    {
        path: 'lib/javascript/global_objects/regexp/compile/index.md',
        title: 'RegExp.prototype.compile()',
    },
    {
        path: 'lib/javascript/global_objects/regexp/dotall/index.md',
        title: 'RegExp.prototype.dotAll',
    },
    {
        path: 'lib/javascript/global_objects/regexp/exec/index.md',
        title: 'RegExp.prototype.exec()',
    },
    {
        path: 'lib/javascript/global_objects/regexp/flags/index.md',
        title: 'RegExp.prototype.flags',
    },
    {
        path: 'lib/javascript/global_objects/regexp/global/index.md',
        title: 'RegExp.prototype.global',
    },
    {
        path: 'lib/javascript/global_objects/regexp/hasindices/index.md',
        title: 'RegExp.prototype.hasIndices',
    },
    {
        path: 'lib/javascript/global_objects/regexp/ignorecase/index.md',
        title: 'RegExp.prototype.ignoreCase',
    },
    {
        path: 'lib/javascript/global_objects/regexp/index.md',
        title: 'RegExp',
    },
    {
        path: 'lib/javascript/global_objects/regexp/input/index.md',
        title: 'RegExp.input ($_)',
    },
    {
        path: 'lib/javascript/global_objects/regexp/lastindex/index.md',
        title: 'RegExp: lastIndex',
    },
    {
        path: 'lib/javascript/global_objects/regexp/lastmatch/index.md',
        title: 'RegExp.lastMatch ($&)',
    },
    {
        path: 'lib/javascript/global_objects/regexp/lastparen/index.md',
        title: 'RegExp.lastParen ($+)',
    },
    {
        path: 'lib/javascript/global_objects/regexp/leftcontext/index.md',
        title: 'RegExp.leftContext ($`)',
    },
    {
        path: 'lib/javascript/global_objects/regexp/multiline/index.md',
        title: 'RegExp.prototype.multiline',
    },
    {
        path: 'lib/javascript/global_objects/regexp/n/index.md',
        title: 'RegExp.$1, …, RegExp.$9',
    },
    {
        path: 'lib/javascript/global_objects/regexp/regexp/index.md',
        title: 'RegExp() constructor',
    },
    {
        path: 'lib/javascript/global_objects/regexp/rightcontext/index.md',
        title: 'RegExp.rightContext ($\')',
    },
    {
        path: 'lib/javascript/global_objects/regexp/source/index.md',
        title: 'RegExp.prototype.source',
    },
    {
        path: 'lib/javascript/global_objects/regexp/sticky/index.md',
        title: 'RegExp.prototype.sticky',
    },
    {
        path: 'lib/javascript/global_objects/regexp/symbol.match/index.md',
        title: 'RegExp.prototype[Symbol.match]()',
    },
    {
        path: 'lib/javascript/global_objects/regexp/symbol.matchall/index.md',
        title: 'RegExp.prototype[Symbol.matchAll]()',
    },
    {
        path: 'lib/javascript/global_objects/regexp/symbol.replace/index.md',
        title: 'RegExp.prototype[Symbol.replace]()',
    },
    {
        path: 'lib/javascript/global_objects/regexp/symbol.search/index.md',
        title: 'RegExp.prototype[Symbol.search]()',
    },
    {
        path: 'lib/javascript/global_objects/regexp/symbol.species/index.md',
        title: 'RegExp[Symbol.species]',
    },
    {
        path: 'lib/javascript/global_objects/regexp/symbol.split/index.md',
        title: 'RegExp.prototype[Symbol.split]()',
    },
    {
        path: 'lib/javascript/global_objects/regexp/test/index.md',
        title: 'RegExp.prototype.test()',
    },
    {
        path: 'lib/javascript/global_objects/regexp/tostring/index.md',
        title: 'RegExp.prototype.toString()',
    },
    {
        path: 'lib/javascript/global_objects/regexp/unicode/index.md',
        title: 'RegExp.prototype.unicode',
    },
    {
        path: 'lib/javascript/global_objects/regexp/unicodesets/index.md',
        title: 'RegExp.prototype.unicodeSets',
    },
    {
        path: 'lib/javascript/global_objects/set/add/index.md',
        title: 'Set.prototype.add()',
    },
    {
        path: 'lib/javascript/global_objects/set/clear/index.md',
        title: 'Set.prototype.clear()',
    },
    {
        path: 'lib/javascript/global_objects/set/delete/index.md',
        title: 'Set.prototype.delete()',
    },
    {
        path: 'lib/javascript/global_objects/set/difference/index.md',
        title: 'Set.prototype.difference()',
    },
    {
        path: 'lib/javascript/global_objects/set/entries/index.md',
        title: 'Set.prototype.entries()',
    },
    {
        path: 'lib/javascript/global_objects/set/foreach/index.md',
        title: 'Set.prototype.forEach()',
    },
    {
        path: 'lib/javascript/global_objects/set/has/index.md',
        title: 'Set.prototype.has()',
    },
    {
        path: 'lib/javascript/global_objects/set/index.md',
        title: 'Set',
    },
    {
        path: 'lib/javascript/global_objects/set/intersection/index.md',
        title: 'Set.prototype.intersection()',
    },
    {
        path: 'lib/javascript/global_objects/set/isdisjointfrom/index.md',
        title: 'Set.prototype.isDisjointFrom()',
    },
    {
        path: 'lib/javascript/global_objects/set/issubsetof/index.md',
        title: 'Set.prototype.isSubsetOf()',
    },
    {
        path: 'lib/javascript/global_objects/set/issupersetof/index.md',
        title: 'Set.prototype.isSupersetOf()',
    },
    {
        path: 'lib/javascript/global_objects/set/keys/index.md',
        title: 'Set.prototype.keys()',
    },
    {
        path: 'lib/javascript/global_objects/set/set/index.md',
        title: 'Set() constructor',
    },
    {
        path: 'lib/javascript/global_objects/set/size/index.md',
        title: 'Set.prototype.size',
    },
    {
        path: 'lib/javascript/global_objects/set/symbol.iterator/index.md',
        title: 'Set.prototype[Symbol.iterator]()',
    },
    {
        path: 'lib/javascript/global_objects/set/symbol.species/index.md',
        title: 'Set[Symbol.species]',
    },
    {
        path: 'lib/javascript/global_objects/set/symmetricdifference/index.md',
        title: 'Set.prototype.symmetricDifference()',
    },
    {
        path: 'lib/javascript/global_objects/set/union/index.md',
        title: 'Set.prototype.union()',
    },
    {
        path: 'lib/javascript/global_objects/set/values/index.md',
        title: 'Set.prototype.values()',
    },
    {
        path: 'lib/javascript/global_objects/sharedarraybuffer/bytelength/index.md',
        title: 'SharedArrayBuffer.prototype.byteLength',
    },
    {
        path: 'lib/javascript/global_objects/sharedarraybuffer/grow/index.md',
        title: 'SharedArrayBuffer.prototype.grow()',
    },
    {
        path: 'lib/javascript/global_objects/sharedarraybuffer/growable/index.md',
        title: 'SharedArrayBuffer.prototype.growable',
    },
    {
        path: 'lib/javascript/global_objects/sharedarraybuffer/index.md',
        title: 'SharedArrayBuffer',
    },
    {
        path: 'lib/javascript/global_objects/sharedarraybuffer/maxbytelength/index.md',
        title: 'SharedArrayBuffer.prototype.maxByteLength',
    },
    {
        path: 'lib/javascript/global_objects/sharedarraybuffer/sharedarraybuffer/index.md',
        title: 'SharedArrayBuffer() constructor',
    },
    {
        path: 'lib/javascript/global_objects/sharedarraybuffer/slice/index.md',
        title: 'SharedArrayBuffer.prototype.slice()',
    },
    {
        path: 'lib/javascript/global_objects/sharedarraybuffer/symbol.species/index.md',
        title: 'SharedArrayBuffer[Symbol.species]',
    },
    {
        path: 'lib/javascript/global_objects/string/anchor/index.md',
        title: 'String.prototype.anchor()',
    },
    {
        path: 'lib/javascript/global_objects/string/at/index.md',
        title: 'String.prototype.at()',
    },
    {
        path: 'lib/javascript/global_objects/string/big/index.md',
        title: 'String.prototype.big()',
    },
    {
        path: 'lib/javascript/global_objects/string/blink/index.md',
        title: 'String.prototype.blink()',
    },
    {
        path: 'lib/javascript/global_objects/string/bold/index.md',
        title: 'String.prototype.bold()',
    },
    {
        path: 'lib/javascript/global_objects/string/charat/index.md',
        title: 'String.prototype.charAt()',
    },
    {
        path: 'lib/javascript/global_objects/string/charcodeat/index.md',
        title: 'String.prototype.charCodeAt()',
    },
    {
        path: 'lib/javascript/global_objects/string/codepointat/index.md',
        title: 'String.prototype.codePointAt()',
    },
    {
        path: 'lib/javascript/global_objects/string/concat/index.md',
        title: 'String.prototype.concat()',
    },
    {
        path: 'lib/javascript/global_objects/string/endswith/index.md',
        title: 'String.prototype.endsWith()',
    },
    {
        path: 'lib/javascript/global_objects/string/fixed/index.md',
        title: 'String.prototype.fixed()',
    },
    {
        path: 'lib/javascript/global_objects/string/fontcolor/index.md',
        title: 'String.prototype.fontcolor()',
    },
    {
        path: 'lib/javascript/global_objects/string/fontsize/index.md',
        title: 'String.prototype.fontsize()',
    },
    {
        path: 'lib/javascript/global_objects/string/fromcharcode/index.md',
        title: 'String.fromCharCode()',
    },
    {
        path: 'lib/javascript/global_objects/string/fromcodepoint/index.md',
        title: 'String.fromCodePoint()',
    },
    {
        path: 'lib/javascript/global_objects/string/includes/index.md',
        title: 'String.prototype.includes()',
    },
    {
        path: 'lib/javascript/global_objects/string/index.md',
        title: 'String',
    },
    {
        path: 'lib/javascript/global_objects/string/indexof/index.md',
        title: 'String.prototype.indexOf()',
    },
    {
        path: 'lib/javascript/global_objects/string/iswellformed/index.md',
        title: 'String.prototype.isWellFormed()',
    },
    {
        path: 'lib/javascript/global_objects/string/italics/index.md',
        title: 'String.prototype.italics()',
    },
    {
        path: 'lib/javascript/global_objects/string/lastindexof/index.md',
        title: 'String.prototype.lastIndexOf()',
    },
    {
        path: 'lib/javascript/global_objects/string/length/index.md',
        title: 'String: length',
    },
    {
        path: 'lib/javascript/global_objects/string/link/index.md',
        title: 'String.prototype.link()',
    },
    {
        path: 'lib/javascript/global_objects/string/localecompare/index.md',
        title: 'String.prototype.localeCompare()',
    },
    {
        path: 'lib/javascript/global_objects/string/match/index.md',
        title: 'String.prototype.match()',
    },
    {
        path: 'lib/javascript/global_objects/string/matchall/index.md',
        title: 'String.prototype.matchAll()',
    },
    {
        path: 'lib/javascript/global_objects/string/normalize/index.md',
        title: 'String.prototype.normalize()',
    },
    {
        path: 'lib/javascript/global_objects/string/padend/index.md',
        title: 'String.prototype.padEnd()',
    },
    {
        path: 'lib/javascript/global_objects/string/padstart/index.md',
        title: 'String.prototype.padStart()',
    },
    {
        path: 'lib/javascript/global_objects/string/raw/index.md',
        title: 'String.raw()',
    },
    {
        path: 'lib/javascript/global_objects/string/repeat/index.md',
        title: 'String.prototype.repeat()',
    },
    {
        path: 'lib/javascript/global_objects/string/replace/index.md',
        title: 'String.prototype.replace()',
    },
    {
        path: 'lib/javascript/global_objects/string/replaceall/index.md',
        title: 'String.prototype.replaceAll()',
    },
    {
        path: 'lib/javascript/global_objects/string/search/index.md',
        title: 'String.prototype.search()',
    },
    {
        path: 'lib/javascript/global_objects/string/slice/index.md',
        title: 'String.prototype.slice()',
    },
    {
        path: 'lib/javascript/global_objects/string/small/index.md',
        title: 'String.prototype.small()',
    },
    {
        path: 'lib/javascript/global_objects/string/split/index.md',
        title: 'String.prototype.split()',
    },
    {
        path: 'lib/javascript/global_objects/string/startswith/index.md',
        title: 'String.prototype.startsWith()',
    },
    {
        path: 'lib/javascript/global_objects/string/strike/index.md',
        title: 'String.prototype.strike()',
    },
    {
        path: 'lib/javascript/global_objects/string/string/index.md',
        title: 'String() constructor',
    },
    {
        path: 'lib/javascript/global_objects/string/sub/index.md',
        title: 'String.prototype.sub()',
    },
    {
        path: 'lib/javascript/global_objects/string/substr/index.md',
        title: 'String.prototype.substr()',
    },
    {
        path: 'lib/javascript/global_objects/string/substring/index.md',
        title: 'String.prototype.substring()',
    },
    {
        path: 'lib/javascript/global_objects/string/sup/index.md',
        title: 'String.prototype.sup()',
    },
    {
        path: 'lib/javascript/global_objects/string/symbol.iterator/index.md',
        title: 'String.prototype[Symbol.iterator]()',
    },
    {
        path: 'lib/javascript/global_objects/string/tolocalelowercase/index.md',
        title: 'String.prototype.toLocaleLowerCase()',
    },
    {
        path: 'lib/javascript/global_objects/string/tolocaleuppercase/index.md',
        title: 'String.prototype.toLocaleUpperCase()',
    },
    {
        path: 'lib/javascript/global_objects/string/tolowercase/index.md',
        title: 'String.prototype.toLowerCase()',
    },
    {
        path: 'lib/javascript/global_objects/string/tostring/index.md',
        title: 'String.prototype.toString()',
    },
    {
        path: 'lib/javascript/global_objects/string/touppercase/index.md',
        title: 'String.prototype.toUpperCase()',
    },
    {
        path: 'lib/javascript/global_objects/string/towellformed/index.md',
        title: 'String.prototype.toWellFormed()',
    },
    {
        path: 'lib/javascript/global_objects/string/trim/index.md',
        title: 'String.prototype.trim()',
    },
    {
        path: 'lib/javascript/global_objects/string/trimend/index.md',
        title: 'String.prototype.trimEnd()',
    },
    {
        path: 'lib/javascript/global_objects/string/trimstart/index.md',
        title: 'String.prototype.trimStart()',
    },
    {
        path: 'lib/javascript/global_objects/string/valueof/index.md',
        title: 'String.prototype.valueOf()',
    },
    {
        path: 'lib/javascript/global_objects/symbol/asynciterator/index.md',
        title: 'Symbol.asyncIterator',
    },
    {
        path: 'lib/javascript/global_objects/symbol/description/index.md',
        title: 'Symbol.prototype.description',
    },
    {
        path: 'lib/javascript/global_objects/symbol/for/index.md',
        title: 'Symbol.for()',
    },
    {
        path: 'lib/javascript/global_objects/symbol/hasinstance/index.md',
        title: 'Symbol.hasInstance',
    },
    {
        path: 'lib/javascript/global_objects/symbol/index.md',
        title: 'Symbol',
    },
    {
        path: 'lib/javascript/global_objects/symbol/isconcatspreadable/index.md',
        title: 'Symbol.isConcatSpreadable',
    },
    {
        path: 'lib/javascript/global_objects/symbol/iterator/index.md',
        title: 'Symbol.iterator',
    },
    {
        path: 'lib/javascript/global_objects/symbol/keyfor/index.md',
        title: 'Symbol.keyFor()',
    },
    {
        path: 'lib/javascript/global_objects/symbol/match/index.md',
        title: 'Symbol.match',
    },
    {
        path: 'lib/javascript/global_objects/symbol/matchall/index.md',
        title: 'Symbol.matchAll',
    },
    {
        path: 'lib/javascript/global_objects/symbol/replace/index.md',
        title: 'Symbol.replace',
    },
    {
        path: 'lib/javascript/global_objects/symbol/search/index.md',
        title: 'Symbol.search',
    },
    {
        path: 'lib/javascript/global_objects/symbol/species/index.md',
        title: 'Symbol.species',
    },
    {
        path: 'lib/javascript/global_objects/symbol/split/index.md',
        title: 'Symbol.split',
    },
    {
        path: 'lib/javascript/global_objects/symbol/symbol/index.md',
        title: 'Symbol() constructor',
    },
    {
        path: 'lib/javascript/global_objects/symbol/symbol.toprimitive/index.md',
        title: 'Symbol.prototype[Symbol.toPrimitive]()',
    },
    {
        path: 'lib/javascript/global_objects/symbol/toprimitive/index.md',
        title: 'Symbol.toPrimitive',
    },
    {
        path: 'lib/javascript/global_objects/symbol/tostring/index.md',
        title: 'Symbol.prototype.toString()',
    },
    {
        path: 'lib/javascript/global_objects/symbol/tostringtag/index.md',
        title: 'Symbol.toStringTag',
    },
    {
        path: 'lib/javascript/global_objects/symbol/unscopables/index.md',
        title: 'Symbol.unscopables',
    },
    {
        path: 'lib/javascript/global_objects/symbol/valueof/index.md',
        title: 'Symbol.prototype.valueOf()',
    },
    {
        path: 'lib/javascript/global_objects/syntaxerror/index.md',
        title: 'SyntaxError',
    },
    {
        path: 'lib/javascript/global_objects/syntaxerror/syntaxerror/index.md',
        title: 'SyntaxError() constructor',
    },
    {
        path: 'lib/javascript/global_objects/typedarray/at/index.md',
        title: 'TypedArray.prototype.at()',
    },
    {
        path: 'lib/javascript/global_objects/typedarray/buffer/index.md',
        title: 'TypedArray.prototype.buffer',
    },
    {
        path: 'lib/javascript/global_objects/typedarray/bytelength/index.md',
        title: 'TypedArray.prototype.byteLength',
    },
    {
        path: 'lib/javascript/global_objects/typedarray/byteoffset/index.md',
        title: 'TypedArray.prototype.byteOffset',
    },
    {
        path: 'lib/javascript/global_objects/typedarray/bytes_per_element/index.md',
        title: 'TypedArray.BYTES_PER_ELEMENT',
    },
    {
        path: 'lib/javascript/global_objects/typedarray/copywithin/index.md',
        title: 'TypedArray.prototype.copyWithin()',
    },
    {
        path: 'lib/javascript/global_objects/typedarray/entries/index.md',
        title: 'TypedArray.prototype.entries()',
    },
    {
        path: 'lib/javascript/global_objects/typedarray/every/index.md',
        title: 'TypedArray.prototype.every()',
    },
    {
        path: 'lib/javascript/global_objects/typedarray/fill/index.md',
        title: 'TypedArray.prototype.fill()',
    },
    {
        path: 'lib/javascript/global_objects/typedarray/filter/index.md',
        title: 'TypedArray.prototype.filter()',
    },
    {
        path: 'lib/javascript/global_objects/typedarray/find/index.md',
        title: 'TypedArray.prototype.find()',
    },
    {
        path: 'lib/javascript/global_objects/typedarray/findindex/index.md',
        title: 'TypedArray.prototype.findIndex()',
    },
    {
        path: 'lib/javascript/global_objects/typedarray/findlast/index.md',
        title: 'TypedArray.prototype.findLast()',
    },
    {
        path: 'lib/javascript/global_objects/typedarray/findlastindex/index.md',
        title: 'TypedArray.prototype.findLastIndex()',
    },
    {
        path: 'lib/javascript/global_objects/typedarray/foreach/index.md',
        title: 'TypedArray.prototype.forEach()',
    },
    {
        path: 'lib/javascript/global_objects/typedarray/from/index.md',
        title: 'TypedArray.from()',
    },
    {
        path: 'lib/javascript/global_objects/typedarray/includes/index.md',
        title: 'TypedArray.prototype.includes()',
    },
    {
        path: 'lib/javascript/global_objects/typedarray/index.md',
        title: 'TypedArray',
    },
    {
        path: 'lib/javascript/global_objects/typedarray/indexof/index.md',
        title: 'TypedArray.prototype.indexOf()',
    },
    {
        path: 'lib/javascript/global_objects/typedarray/join/index.md',
        title: 'TypedArray.prototype.join()',
    },
    {
        path: 'lib/javascript/global_objects/typedarray/keys/index.md',
        title: 'TypedArray.prototype.keys()',
    },
    {
        path: 'lib/javascript/global_objects/typedarray/lastindexof/index.md',
        title: 'TypedArray.prototype.lastIndexOf()',
    },
    {
        path: 'lib/javascript/global_objects/typedarray/length/index.md',
        title: 'TypedArray.prototype.length',
    },
    {
        path: 'lib/javascript/global_objects/typedarray/map/index.md',
        title: 'TypedArray.prototype.map()',
    },
    {
        path: 'lib/javascript/global_objects/typedarray/of/index.md',
        title: 'TypedArray.of()',
    },
    {
        path: 'lib/javascript/global_objects/typedarray/reduce/index.md',
        title: 'TypedArray.prototype.reduce()',
    },
    {
        path: 'lib/javascript/global_objects/typedarray/reduceright/index.md',
        title: 'TypedArray.prototype.reduceRight()',
    },
    {
        path: 'lib/javascript/global_objects/typedarray/reverse/index.md',
        title: 'TypedArray.prototype.reverse()',
    },
    {
        path: 'lib/javascript/global_objects/typedarray/set/index.md',
        title: 'TypedArray.prototype.set()',
    },
    {
        path: 'lib/javascript/global_objects/typedarray/slice/index.md',
        title: 'TypedArray.prototype.slice()',
    },
    {
        path: 'lib/javascript/global_objects/typedarray/some/index.md',
        title: 'TypedArray.prototype.some()',
    },
    {
        path: 'lib/javascript/global_objects/typedarray/sort/index.md',
        title: 'TypedArray.prototype.sort()',
    },
    {
        path: 'lib/javascript/global_objects/typedarray/subarray/index.md',
        title: 'TypedArray.prototype.subarray()',
    },
    {
        path: 'lib/javascript/global_objects/typedarray/symbol.iterator/index.md',
        title: 'TypedArray.prototype[Symbol.iterator]()',
    },
    {
        path: 'lib/javascript/global_objects/typedarray/symbol.species/index.md',
        title: 'TypedArray[Symbol.species]',
    },
    {
        path: 'lib/javascript/global_objects/typedarray/tolocalestring/index.md',
        title: 'TypedArray.prototype.toLocaleString()',
    },
    {
        path: 'lib/javascript/global_objects/typedarray/toreversed/index.md',
        title: 'TypedArray.prototype.toReversed()',
    },
    {
        path: 'lib/javascript/global_objects/typedarray/tosorted/index.md',
        title: 'TypedArray.prototype.toSorted()',
    },
    {
        path: 'lib/javascript/global_objects/typedarray/tostring/index.md',
        title: 'TypedArray.prototype.toString()',
    },
    {
        path: 'lib/javascript/global_objects/typedarray/values/index.md',
        title: 'TypedArray.prototype.values()',
    },
    {
        path: 'lib/javascript/global_objects/typedarray/with/index.md',
        title: 'TypedArray.prototype.with()',
    },
    {
        path: 'lib/javascript/global_objects/typeerror/index.md',
        title: 'TypeError',
    },
    {
        path: 'lib/javascript/global_objects/typeerror/typeerror/index.md',
        title: 'TypeError() constructor',
    },
    {
        path: 'lib/javascript/global_objects/uint16array/index.md',
        title: 'Uint16Array',
    },
    {
        path: 'lib/javascript/global_objects/uint16array/uint16array/index.md',
        title: 'Uint16Array() constructor',
    },
    {
        path: 'lib/javascript/global_objects/uint32array/index.md',
        title: 'Uint32Array',
    },
    {
        path: 'lib/javascript/global_objects/uint32array/uint32array/index.md',
        title: 'Uint32Array() constructor',
    },
    {
        path: 'lib/javascript/global_objects/uint8array/index.md',
        title: 'Uint8Array',
    },
    {
        path: 'lib/javascript/global_objects/uint8array/uint8array/index.md',
        title: 'Uint8Array() constructor',
    },
    {
        path: 'lib/javascript/global_objects/uint8clampedarray/index.md',
        title: 'Uint8ClampedArray',
    },
    {
        path: 'lib/javascript/global_objects/uint8clampedarray/uint8clampedarray/index.md',
        title: 'Uint8ClampedArray() constructor',
    },
    {
        path: 'lib/javascript/global_objects/undefined/index.md',
        title: 'undefined',
    },
    {
        path: 'lib/javascript/global_objects/unescape/index.md',
        title: 'unescape()',
    },
    {
        path: 'lib/javascript/global_objects/urierror/index.md',
        title: 'URIError',
    },
    {
        path: 'lib/javascript/global_objects/urierror/urierror/index.md',
        title: 'URIError() constructor',
    },
    {
        path: 'lib/javascript/global_objects/weakmap/delete/index.md',
        title: 'WeakMap.prototype.delete()',
    },
    {
        path: 'lib/javascript/global_objects/weakmap/get/index.md',
        title: 'WeakMap.prototype.get()',
    },
    {
        path: 'lib/javascript/global_objects/weakmap/has/index.md',
        title: 'WeakMap.prototype.has()',
    },
    {
        path: 'lib/javascript/global_objects/weakmap/index.md',
        title: 'WeakMap',
    },
    {
        path: 'lib/javascript/global_objects/weakmap/set/index.md',
        title: 'WeakMap.prototype.set()',
    },
    {
        path: 'lib/javascript/global_objects/weakmap/weakmap/index.md',
        title: 'WeakMap() constructor',
    },
    {
        path: 'lib/javascript/global_objects/weakref/deref/index.md',
        title: 'WeakRef.prototype.deref()',
    },
    {
        path: 'lib/javascript/global_objects/weakref/index.md',
        title: 'WeakRef',
    },
    {
        path: 'lib/javascript/global_objects/weakref/weakref/index.md',
        title: 'WeakRef() constructor',
    },
    {
        path: 'lib/javascript/global_objects/weakset/add/index.md',
        title: 'WeakSet.prototype.add()',
    },
    {
        path: 'lib/javascript/global_objects/weakset/delete/index.md',
        title: 'WeakSet.prototype.delete()',
    },
    {
        path: 'lib/javascript/global_objects/weakset/has/index.md',
        title: 'WeakSet.prototype.has()',
    },
    {
        path: 'lib/javascript/global_objects/weakset/index.md',
        title: 'WeakSet',
    },
    {
        path: 'lib/javascript/global_objects/weakset/weakset/index.md',
        title: 'WeakSet() constructor',
    },
    {
        path: 'lib/javascript/iteration_protocols/index.md',
        title: 'Iteration protocols',
    },
    {
        path: 'lib/javascript/lexical_grammar/index.md',
        title: 'Lexical grammar',
    },
    {
        path: 'lib/javascript/operators/addition/index.md',
        title: 'Addition (+)',
    },
    {
        path: 'lib/javascript/operators/addition_assignment/index.md',
        title: 'Addition assignment (+=)',
    },
    {
        path: 'lib/javascript/operators/assignment/index.md',
        title: 'Assignment (=)',
    },
    {
        path: 'lib/javascript/operators/async_function/index.md',
        title: 'async function expression',
    },
    {
        path: 'lib/javascript/operators/async_function_star_/index.md',
        title: 'async function* expression',
    },
    {
        path: 'lib/javascript/operators/await/index.md',
        title: 'await',
    },
    {
        path: 'lib/javascript/operators/bitwise_and/index.md',
        title: 'Bitwise AND (&)',
    },
    {
        path: 'lib/javascript/operators/bitwise_and_assignment/index.md',
        title: 'Bitwise AND assignment (&=)',
    },
    {
        path: 'lib/javascript/operators/bitwise_not/index.md',
        title: 'Bitwise NOT (~)',
    },
    {
        path: 'lib/javascript/operators/bitwise_or/index.md',
        title: 'Bitwise OR (|)',
    },
    {
        path: 'lib/javascript/operators/bitwise_or_assignment/index.md',
        title: 'Bitwise OR assignment (|=)',
    },
    {
        path: 'lib/javascript/operators/bitwise_xor/index.md',
        title: 'Bitwise XOR (^)',
    },
    {
        path: 'lib/javascript/operators/bitwise_xor_assignment/index.md',
        title: 'Bitwise XOR assignment (^=)',
    },
    {
        path: 'lib/javascript/operators/class/index.md',
        title: 'class expression',
    },
    {
        path: 'lib/javascript/operators/comma_operator/index.md',
        title: 'Comma operator (,)',
    },
    {
        path: 'lib/javascript/operators/conditional_operator/index.md',
        title: 'Conditional (ternary) operator',
    },
    {
        path: 'lib/javascript/operators/decrement/index.md',
        title: 'Decrement (--)',
    },
    {
        path: 'lib/javascript/operators/delete/index.md',
        title: 'delete',
    },
    {
        path: 'lib/javascript/operators/destructuring_assignment/index.md',
        title: 'Destructuring assignment',
    },
    {
        path: 'lib/javascript/operators/division/index.md',
        title: 'Division (/)',
    },
    {
        path: 'lib/javascript/operators/division_assignment/index.md',
        title: 'Division assignment (/=)',
    },
    {
        path: 'lib/javascript/operators/equality/index.md',
        title: 'Equality (==)',
    },
    {
        path: 'lib/javascript/operators/exponentiation/index.md',
        title: 'Exponentiation (**)',
    },
    {
        path: 'lib/javascript/operators/exponentiation_assignment/index.md',
        title: 'Exponentiation assignment (**=)',
    },
    {
        path: 'lib/javascript/operators/function/index.md',
        title: 'function expression',
    },
    {
        path: 'lib/javascript/operators/function_star_/index.md',
        title: 'function* expression',
    },
    {
        path: 'lib/javascript/operators/greater_than/index.md',
        title: 'Greater than (>)',
    },
    {
        path: 'lib/javascript/operators/greater_than_or_equal/index.md',
        title: 'Greater than or equal (>=)',
    },
    {
        path: 'lib/javascript/operators/grouping/index.md',
        title: 'Grouping operator ( )',
    },
    {
        path: 'lib/javascript/operators/import/index.md',
        title: 'import()',
    },
    {
        path: 'lib/javascript/operators/import.meta/index.md',
        title: 'import.meta',
    },
    {
        path: 'lib/javascript/operators/import.meta/resolve/index.md',
        title: 'import.meta.resolve()',
    },
    {
        path: 'lib/javascript/operators/in/index.md',
        title: 'in',
    },
    {
        path: 'lib/javascript/operators/increment/index.md',
        title: 'Increment (++)',
    },
    {
        path: 'lib/javascript/operators/index.md',
        title: 'Expressions and operators',
    },
    {
        path: 'lib/javascript/operators/inequality/index.md',
        title: 'Inequality (!=)',
    },
    {
        path: 'lib/javascript/operators/instanceof/index.md',
        title: 'instanceof',
    },
    {
        path: 'lib/javascript/operators/left_shift/index.md',
        title: 'Left shift (<<)',
    },
    {
        path: 'lib/javascript/operators/left_shift_assignment/index.md',
        title: 'Left shift assignment (<<=)',
    },
    {
        path: 'lib/javascript/operators/less_than/index.md',
        title: 'Less than (<)',
    },
    {
        path: 'lib/javascript/operators/less_than_or_equal/index.md',
        title: 'Less than or equal (<=)',
    },
    {
        path: 'lib/javascript/operators/logical_and/index.md',
        title: 'Logical AND (&&)',
    },
    {
        path: 'lib/javascript/operators/logical_and_assignment/index.md',
        title: 'Logical AND assignment (&&=)',
    },
    {
        path: 'lib/javascript/operators/logical_not/index.md',
        title: 'Logical NOT (!)',
    },
    {
        path: 'lib/javascript/operators/logical_or/index.md',
        title: 'Logical OR (||)',
    },
    {
        path: 'lib/javascript/operators/logical_or_assignment/index.md',
        title: 'Logical OR assignment (||=)',
    },
    {
        path: 'lib/javascript/operators/multiplication/index.md',
        title: 'Multiplication (*)',
    },
    {
        path: 'lib/javascript/operators/multiplication_assignment/index.md',
        title: 'Multiplication assignment (*=)',
    },
    {
        path: 'lib/javascript/operators/new/index.md',
        title: 'new',
    },
    {
        path: 'lib/javascript/operators/new.target/index.md',
        title: 'new.target',
    },
    {
        path: 'lib/javascript/operators/null/index.md',
        title: 'null',
    },
    {
        path: 'lib/javascript/operators/nullish_coalescing/index.md',
        title: 'Nullish coalescing operator (??)',
    },
    {
        path: 'lib/javascript/operators/nullish_coalescing_assignment/index.md',
        title: 'Nullish coalescing assignment (??=)',
    },
    {
        path: 'lib/javascript/operators/object_initializer/index.md',
        title: 'Object initializer',
    },
    {
        path: 'lib/javascript/operators/operator_precedence/index.md',
        title: 'Operator precedence',
    },
    {
        path: 'lib/javascript/operators/optional_chaining/index.md',
        title: 'Optional chaining (?.)',
    },
    {
        path: 'lib/javascript/operators/property_accessors/index.md',
        title: 'Property accessors',
    },
    {
        path: 'lib/javascript/operators/remainder/index.md',
        title: 'Remainder (%)',
    },
    {
        path: 'lib/javascript/operators/remainder_assignment/index.md',
        title: 'Remainder assignment (%=)',
    },
    {
        path: 'lib/javascript/operators/right_shift/index.md',
        title: 'Right shift (>>)',
    },
    {
        path: 'lib/javascript/operators/right_shift_assignment/index.md',
        title: 'Right shift assignment (>>=)',
    },
    {
        path: 'lib/javascript/operators/spread_syntax/index.md',
        title: 'Spread syntax (...)',
    },
    {
        path: 'lib/javascript/operators/strict_equality/index.md',
        title: 'Strict equality (===)',
    },
    {
        path: 'lib/javascript/operators/strict_inequality/index.md',
        title: 'Strict inequality (!==)',
    },
    {
        path: 'lib/javascript/operators/subtraction/index.md',
        title: 'Subtraction (-)',
    },
    {
        path: 'lib/javascript/operators/subtraction_assignment/index.md',
        title: 'Subtraction assignment (-=)',
    },
    {
        path: 'lib/javascript/operators/super/index.md',
        title: 'super',
    },
    {
        path: 'lib/javascript/operators/this/index.md',
        title: 'this',
    },
    {
        path: 'lib/javascript/operators/typeof/index.md',
        title: 'typeof',
    },
    {
        path: 'lib/javascript/operators/unary_negation/index.md',
        title: 'Unary negation (-)',
    },
    {
        path: 'lib/javascript/operators/unary_plus/index.md',
        title: 'Unary plus (+)',
    },
    {
        path: 'lib/javascript/operators/unsigned_right_shift/index.md',
        title: 'Unsigned right shift (>>>)',
    },
    {
        path: 'lib/javascript/operators/unsigned_right_shift_assignment/index.md',
        title: 'Unsigned right shift assignment (>>>=)',
    },
    {
        path: 'lib/javascript/operators/void/index.md',
        title: 'void operator',
    },
    {
        path: 'lib/javascript/operators/yield/index.md',
        title: 'yield',
    },
    {
        path: 'lib/javascript/operators/yield_star_/index.md',
        title: 'yield*',
    },
    {
        path: 'lib/javascript/regular_expressions/backreference/index.md',
        title: 'Backreference: \\1, \\2',
    },
    {
        path: 'lib/javascript/regular_expressions/capturing_group/index.md',
        title: 'Capturing group: (...)',
    },
    {
        path: 'lib/javascript/regular_expressions/character_class/index.md',
        title: 'Character class: [...], [^...]',
    },
    {
        path: 'lib/javascript/regular_expressions/character_class_escape/index.md',
        title: 'Character class escape: \\d, \\D, \\w, \\W, \\s, \\S',
    },
    {
        path: 'lib/javascript/regular_expressions/character_escape/index.md',
        title: 'Character escape: \\n, \\u{...}',
    },
    {
        path: 'lib/javascript/regular_expressions/disjunction/index.md',
        title: 'Disjunction: |',
    },
    {
        path: 'lib/javascript/regular_expressions/index.md',
        title: 'Regular expressions',
    },
    {
        path: 'lib/javascript/regular_expressions/input_boundary_assertion/index.md',
        title: 'Input boundary assertion: ^, $',
    },
    {
        path: 'lib/javascript/regular_expressions/literal_character/index.md',
        title: 'Literal character: a, b',
    },
    {
        path: 'lib/javascript/regular_expressions/lookahead_assertion/index.md',
        title: 'Lookahead assertion: (?=...), (?!...)',
    },
    {
        path: 'lib/javascript/regular_expressions/lookbehind_assertion/index.md',
        title: 'Lookbehind assertion: (?<=...), (?<!...)',
    },
    {
        path: 'lib/javascript/regular_expressions/modifier/index.md',
        title: 'Modifier: (?ims-ims:...)',
    },
    {
        path: 'lib/javascript/regular_expressions/named_backreference/index.md',
        title: 'Named backreference: \\k<name>',
    },
    {
        path: 'lib/javascript/regular_expressions/named_capturing_group/index.md',
        title: 'Named capturing group: (?<name>...)',
    },
    {
        path: 'lib/javascript/regular_expressions/non-capturing_group/index.md',
        title: 'Non-capturing group: (?:...)',
    },
    {
        path: 'lib/javascript/regular_expressions/quantifier/index.md',
        title: 'Quantifier: *, +, ?, {n}, {n,}, {n,m}',
    },
    {
        path: 'lib/javascript/regular_expressions/unicode_character_class_escape/index.md',
        title: 'Unicode character class escape: \\p{...}, \\P{...}',
    },
    {
        path: 'lib/javascript/regular_expressions/wildcard/index.md',
        title: 'Wildcard: .',
    },
    {
        path: 'lib/javascript/regular_expressions/word_boundary_assertion/index.md',
        title: 'Word boundary assertion: \\b, \\B',
    },
    {
        path: 'lib/javascript/statements/async_function/index.md',
        title: 'async function',
    },
    {
        path: 'lib/javascript/statements/async_function_star_/index.md',
        title: 'async function*',
    },
    {
        path: 'lib/javascript/statements/block/index.md',
        title: 'Block statement',
    },
    {
        path: 'lib/javascript/statements/break/index.md',
        title: 'break',
    },
    {
        path: 'lib/javascript/statements/class/index.md',
        title: 'class',
    },
    {
        path: 'lib/javascript/statements/const/index.md',
        title: 'const',
    },
    {
        path: 'lib/javascript/statements/continue/index.md',
        title: 'continue',
    },
    {
        path: 'lib/javascript/statements/debugger/index.md',
        title: 'debugger',
    },
    {
        path: 'lib/javascript/statements/do...while/index.md',
        title: 'do...while',
    },
    {
        path: 'lib/javascript/statements/empty/index.md',
        title: 'Empty statement',
    },
    {
        path: 'lib/javascript/statements/export/index.md',
        title: 'export',
    },
    {
        path: 'lib/javascript/statements/expression_statement/index.md',
        title: 'Expression statement',
    },
    {
        path: 'lib/javascript/statements/for/index.md',
        title: 'for',
    },
    {
        path: 'lib/javascript/statements/for-await...of/index.md',
        title: 'for await...of',
    },
    {
        path: 'lib/javascript/statements/for...in/index.md',
        title: 'for...in',
    },
    {
        path: 'lib/javascript/statements/for...of/index.md',
        title: 'for...of',
    },
    {
        path: 'lib/javascript/statements/function/index.md',
        title: 'function',
    },
    {
        path: 'lib/javascript/statements/function_star_/index.md',
        title: 'function*',
    },
    {
        path: 'lib/javascript/statements/if...else/index.md',
        title: 'if...else',
    },
    {
        path: 'lib/javascript/statements/import/index.md',
        title: 'import',
    },
    {
        path: 'lib/javascript/statements/index.md',
        title: 'Statements and declarations',
    },
    {
        path: 'lib/javascript/statements/label/index.md',
        title: 'Labeled statement',
    },
    {
        path: 'lib/javascript/statements/let/index.md',
        title: 'let',
    },
    {
        path: 'lib/javascript/statements/return/index.md',
        title: 'return',
    },
    {
        path: 'lib/javascript/statements/switch/index.md',
        title: 'switch',
    },
    {
        path: 'lib/javascript/statements/throw/index.md',
        title: 'throw',
    },
    {
        path: 'lib/javascript/statements/try...catch/index.md',
        title: 'try...catch',
    },
    {
        path: 'lib/javascript/statements/var/index.md',
        title: 'var',
    },
    {
        path: 'lib/javascript/statements/while/index.md',
        title: 'while',
    },
    {
        path: 'lib/javascript/statements/with/index.md',
        title: 'with',
    },
    {
        path: 'lib/javascript/strict_mode/index.md',
        title: 'Strict mode',
    },
    {
        path: 'lib/javascript/template_literals/index.md',
        title: 'Template literals (Template strings)',
    },
    {
        path: 'lib/javascript/trailing_commas/index.md',
        title: 'Trailing commas',
    },
];
