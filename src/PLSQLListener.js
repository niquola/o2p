// Generated from PLSQL.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by PLSQLParser.
function PLSQLListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

PLSQLListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
PLSQLListener.prototype.constructor = PLSQLListener;

// Enter a parse tree produced by PLSQLParser#swallow_to_semi.
PLSQLListener.prototype.enterSwallow_to_semi = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#swallow_to_semi.
PLSQLListener.prototype.exitSwallow_to_semi = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#compilation_unit.
PLSQLListener.prototype.enterCompilation_unit = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#compilation_unit.
PLSQLListener.prototype.exitCompilation_unit = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#sql_script.
PLSQLListener.prototype.enterSql_script = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#sql_script.
PLSQLListener.prototype.exitSql_script = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#unit_statement.
PLSQLListener.prototype.enterUnit_statement = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#unit_statement.
PLSQLListener.prototype.exitUnit_statement = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#drop_function.
PLSQLListener.prototype.enterDrop_function = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#drop_function.
PLSQLListener.prototype.exitDrop_function = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#alter_function.
PLSQLListener.prototype.enterAlter_function = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#alter_function.
PLSQLListener.prototype.exitAlter_function = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#create_function_body.
PLSQLListener.prototype.enterCreate_function_body = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#create_function_body.
PLSQLListener.prototype.exitCreate_function_body = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#parallel_enable_clause.
PLSQLListener.prototype.enterParallel_enable_clause = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#parallel_enable_clause.
PLSQLListener.prototype.exitParallel_enable_clause = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#partition_by_clause.
PLSQLListener.prototype.enterPartition_by_clause = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#partition_by_clause.
PLSQLListener.prototype.exitPartition_by_clause = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#result_cache_clause.
PLSQLListener.prototype.enterResult_cache_clause = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#result_cache_clause.
PLSQLListener.prototype.exitResult_cache_clause = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#relies_on_part.
PLSQLListener.prototype.enterRelies_on_part = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#relies_on_part.
PLSQLListener.prototype.exitRelies_on_part = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#streaming_clause.
PLSQLListener.prototype.enterStreaming_clause = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#streaming_clause.
PLSQLListener.prototype.exitStreaming_clause = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#drop_package.
PLSQLListener.prototype.enterDrop_package = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#drop_package.
PLSQLListener.prototype.exitDrop_package = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#alter_package.
PLSQLListener.prototype.enterAlter_package = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#alter_package.
PLSQLListener.prototype.exitAlter_package = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#create_package.
PLSQLListener.prototype.enterCreate_package = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#create_package.
PLSQLListener.prototype.exitCreate_package = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#package_body.
PLSQLListener.prototype.enterPackage_body = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#package_body.
PLSQLListener.prototype.exitPackage_body = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#package_spec.
PLSQLListener.prototype.enterPackage_spec = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#package_spec.
PLSQLListener.prototype.exitPackage_spec = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#package_obj_spec.
PLSQLListener.prototype.enterPackage_obj_spec = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#package_obj_spec.
PLSQLListener.prototype.exitPackage_obj_spec = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#procedure_spec.
PLSQLListener.prototype.enterProcedure_spec = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#procedure_spec.
PLSQLListener.prototype.exitProcedure_spec = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#function_spec.
PLSQLListener.prototype.enterFunction_spec = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#function_spec.
PLSQLListener.prototype.exitFunction_spec = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#package_obj_body.
PLSQLListener.prototype.enterPackage_obj_body = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#package_obj_body.
PLSQLListener.prototype.exitPackage_obj_body = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#drop_procedure.
PLSQLListener.prototype.enterDrop_procedure = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#drop_procedure.
PLSQLListener.prototype.exitDrop_procedure = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#alter_procedure.
PLSQLListener.prototype.enterAlter_procedure = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#alter_procedure.
PLSQLListener.prototype.exitAlter_procedure = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#create_procedure_body.
PLSQLListener.prototype.enterCreate_procedure_body = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#create_procedure_body.
PLSQLListener.prototype.exitCreate_procedure_body = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#drop_trigger.
PLSQLListener.prototype.enterDrop_trigger = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#drop_trigger.
PLSQLListener.prototype.exitDrop_trigger = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#alter_trigger.
PLSQLListener.prototype.enterAlter_trigger = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#alter_trigger.
PLSQLListener.prototype.exitAlter_trigger = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#create_trigger.
PLSQLListener.prototype.enterCreate_trigger = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#create_trigger.
PLSQLListener.prototype.exitCreate_trigger = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#trigger_follows_clause.
PLSQLListener.prototype.enterTrigger_follows_clause = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#trigger_follows_clause.
PLSQLListener.prototype.exitTrigger_follows_clause = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#trigger_when_clause.
PLSQLListener.prototype.enterTrigger_when_clause = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#trigger_when_clause.
PLSQLListener.prototype.exitTrigger_when_clause = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#simple_dml_trigger.
PLSQLListener.prototype.enterSimple_dml_trigger = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#simple_dml_trigger.
PLSQLListener.prototype.exitSimple_dml_trigger = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#for_each_row.
PLSQLListener.prototype.enterFor_each_row = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#for_each_row.
PLSQLListener.prototype.exitFor_each_row = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#compound_dml_trigger.
PLSQLListener.prototype.enterCompound_dml_trigger = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#compound_dml_trigger.
PLSQLListener.prototype.exitCompound_dml_trigger = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#non_dml_trigger.
PLSQLListener.prototype.enterNon_dml_trigger = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#non_dml_trigger.
PLSQLListener.prototype.exitNon_dml_trigger = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#trigger_body.
PLSQLListener.prototype.enterTrigger_body = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#trigger_body.
PLSQLListener.prototype.exitTrigger_body = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#routine_clause.
PLSQLListener.prototype.enterRoutine_clause = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#routine_clause.
PLSQLListener.prototype.exitRoutine_clause = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#compound_trigger_block.
PLSQLListener.prototype.enterCompound_trigger_block = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#compound_trigger_block.
PLSQLListener.prototype.exitCompound_trigger_block = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#timing_point_section.
PLSQLListener.prototype.enterTiming_point_section = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#timing_point_section.
PLSQLListener.prototype.exitTiming_point_section = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#non_dml_event.
PLSQLListener.prototype.enterNon_dml_event = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#non_dml_event.
PLSQLListener.prototype.exitNon_dml_event = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#dml_event_clause.
PLSQLListener.prototype.enterDml_event_clause = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#dml_event_clause.
PLSQLListener.prototype.exitDml_event_clause = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#dml_event_element.
PLSQLListener.prototype.enterDml_event_element = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#dml_event_element.
PLSQLListener.prototype.exitDml_event_element = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#dml_event_nested_clause.
PLSQLListener.prototype.enterDml_event_nested_clause = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#dml_event_nested_clause.
PLSQLListener.prototype.exitDml_event_nested_clause = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#referencing_clause.
PLSQLListener.prototype.enterReferencing_clause = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#referencing_clause.
PLSQLListener.prototype.exitReferencing_clause = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#referencing_element.
PLSQLListener.prototype.enterReferencing_element = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#referencing_element.
PLSQLListener.prototype.exitReferencing_element = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#drop_type.
PLSQLListener.prototype.enterDrop_type = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#drop_type.
PLSQLListener.prototype.exitDrop_type = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#alter_type.
PLSQLListener.prototype.enterAlter_type = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#alter_type.
PLSQLListener.prototype.exitAlter_type = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#compile_type_clause.
PLSQLListener.prototype.enterCompile_type_clause = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#compile_type_clause.
PLSQLListener.prototype.exitCompile_type_clause = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#replace_type_clause.
PLSQLListener.prototype.enterReplace_type_clause = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#replace_type_clause.
PLSQLListener.prototype.exitReplace_type_clause = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#alter_method_spec.
PLSQLListener.prototype.enterAlter_method_spec = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#alter_method_spec.
PLSQLListener.prototype.exitAlter_method_spec = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#alter_method_element.
PLSQLListener.prototype.enterAlter_method_element = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#alter_method_element.
PLSQLListener.prototype.exitAlter_method_element = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#alter_attribute_definition.
PLSQLListener.prototype.enterAlter_attribute_definition = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#alter_attribute_definition.
PLSQLListener.prototype.exitAlter_attribute_definition = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#attribute_definition.
PLSQLListener.prototype.enterAttribute_definition = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#attribute_definition.
PLSQLListener.prototype.exitAttribute_definition = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#alter_collection_clauses.
PLSQLListener.prototype.enterAlter_collection_clauses = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#alter_collection_clauses.
PLSQLListener.prototype.exitAlter_collection_clauses = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#dependent_handling_clause.
PLSQLListener.prototype.enterDependent_handling_clause = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#dependent_handling_clause.
PLSQLListener.prototype.exitDependent_handling_clause = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#dependent_exceptions_part.
PLSQLListener.prototype.enterDependent_exceptions_part = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#dependent_exceptions_part.
PLSQLListener.prototype.exitDependent_exceptions_part = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#create_type.
PLSQLListener.prototype.enterCreate_type = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#create_type.
PLSQLListener.prototype.exitCreate_type = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#type_definition.
PLSQLListener.prototype.enterType_definition = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#type_definition.
PLSQLListener.prototype.exitType_definition = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#object_type_def.
PLSQLListener.prototype.enterObject_type_def = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#object_type_def.
PLSQLListener.prototype.exitObject_type_def = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#object_as_part.
PLSQLListener.prototype.enterObject_as_part = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#object_as_part.
PLSQLListener.prototype.exitObject_as_part = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#object_under_part.
PLSQLListener.prototype.enterObject_under_part = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#object_under_part.
PLSQLListener.prototype.exitObject_under_part = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#nested_table_type_def.
PLSQLListener.prototype.enterNested_table_type_def = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#nested_table_type_def.
PLSQLListener.prototype.exitNested_table_type_def = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#sqlj_object_type.
PLSQLListener.prototype.enterSqlj_object_type = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#sqlj_object_type.
PLSQLListener.prototype.exitSqlj_object_type = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#type_body.
PLSQLListener.prototype.enterType_body = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#type_body.
PLSQLListener.prototype.exitType_body = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#type_body_elements.
PLSQLListener.prototype.enterType_body_elements = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#type_body_elements.
PLSQLListener.prototype.exitType_body_elements = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#map_order_func_declaration.
PLSQLListener.prototype.enterMap_order_func_declaration = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#map_order_func_declaration.
PLSQLListener.prototype.exitMap_order_func_declaration = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#subprog_decl_in_type.
PLSQLListener.prototype.enterSubprog_decl_in_type = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#subprog_decl_in_type.
PLSQLListener.prototype.exitSubprog_decl_in_type = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#proc_decl_in_type.
PLSQLListener.prototype.enterProc_decl_in_type = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#proc_decl_in_type.
PLSQLListener.prototype.exitProc_decl_in_type = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#func_decl_in_type.
PLSQLListener.prototype.enterFunc_decl_in_type = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#func_decl_in_type.
PLSQLListener.prototype.exitFunc_decl_in_type = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#constructor_declaration.
PLSQLListener.prototype.enterConstructor_declaration = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#constructor_declaration.
PLSQLListener.prototype.exitConstructor_declaration = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#modifier_clause.
PLSQLListener.prototype.enterModifier_clause = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#modifier_clause.
PLSQLListener.prototype.exitModifier_clause = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#object_member_spec.
PLSQLListener.prototype.enterObject_member_spec = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#object_member_spec.
PLSQLListener.prototype.exitObject_member_spec = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#sqlj_object_type_attr.
PLSQLListener.prototype.enterSqlj_object_type_attr = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#sqlj_object_type_attr.
PLSQLListener.prototype.exitSqlj_object_type_attr = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#element_spec.
PLSQLListener.prototype.enterElement_spec = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#element_spec.
PLSQLListener.prototype.exitElement_spec = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#element_spec_options.
PLSQLListener.prototype.enterElement_spec_options = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#element_spec_options.
PLSQLListener.prototype.exitElement_spec_options = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#subprogram_spec.
PLSQLListener.prototype.enterSubprogram_spec = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#subprogram_spec.
PLSQLListener.prototype.exitSubprogram_spec = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#type_procedure_spec.
PLSQLListener.prototype.enterType_procedure_spec = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#type_procedure_spec.
PLSQLListener.prototype.exitType_procedure_spec = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#type_function_spec.
PLSQLListener.prototype.enterType_function_spec = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#type_function_spec.
PLSQLListener.prototype.exitType_function_spec = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#constructor_spec.
PLSQLListener.prototype.enterConstructor_spec = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#constructor_spec.
PLSQLListener.prototype.exitConstructor_spec = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#map_order_function_spec.
PLSQLListener.prototype.enterMap_order_function_spec = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#map_order_function_spec.
PLSQLListener.prototype.exitMap_order_function_spec = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#pragma_clause.
PLSQLListener.prototype.enterPragma_clause = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#pragma_clause.
PLSQLListener.prototype.exitPragma_clause = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#pragma_elements.
PLSQLListener.prototype.enterPragma_elements = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#pragma_elements.
PLSQLListener.prototype.exitPragma_elements = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#type_elements_parameter.
PLSQLListener.prototype.enterType_elements_parameter = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#type_elements_parameter.
PLSQLListener.prototype.exitType_elements_parameter = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#drop_sequence.
PLSQLListener.prototype.enterDrop_sequence = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#drop_sequence.
PLSQLListener.prototype.exitDrop_sequence = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#alter_sequence.
PLSQLListener.prototype.enterAlter_sequence = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#alter_sequence.
PLSQLListener.prototype.exitAlter_sequence = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#create_sequence.
PLSQLListener.prototype.enterCreate_sequence = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#create_sequence.
PLSQLListener.prototype.exitCreate_sequence = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#sequence_spec.
PLSQLListener.prototype.enterSequence_spec = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#sequence_spec.
PLSQLListener.prototype.exitSequence_spec = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#sequence_start_clause.
PLSQLListener.prototype.enterSequence_start_clause = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#sequence_start_clause.
PLSQLListener.prototype.exitSequence_start_clause = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#invoker_rights_clause.
PLSQLListener.prototype.enterInvoker_rights_clause = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#invoker_rights_clause.
PLSQLListener.prototype.exitInvoker_rights_clause = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#compiler_parameters_clause.
PLSQLListener.prototype.enterCompiler_parameters_clause = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#compiler_parameters_clause.
PLSQLListener.prototype.exitCompiler_parameters_clause = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#call_spec.
PLSQLListener.prototype.enterCall_spec = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#call_spec.
PLSQLListener.prototype.exitCall_spec = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#java_spec.
PLSQLListener.prototype.enterJava_spec = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#java_spec.
PLSQLListener.prototype.exitJava_spec = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#c_spec.
PLSQLListener.prototype.enterC_spec = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#c_spec.
PLSQLListener.prototype.exitC_spec = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#c_agent_in_clause.
PLSQLListener.prototype.enterC_agent_in_clause = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#c_agent_in_clause.
PLSQLListener.prototype.exitC_agent_in_clause = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#c_parameters_clause.
PLSQLListener.prototype.enterC_parameters_clause = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#c_parameters_clause.
PLSQLListener.prototype.exitC_parameters_clause = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#parameter.
PLSQLListener.prototype.enterParameter = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#parameter.
PLSQLListener.prototype.exitParameter = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#default_value_part.
PLSQLListener.prototype.enterDefault_value_part = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#default_value_part.
PLSQLListener.prototype.exitDefault_value_part = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#declare_spec.
PLSQLListener.prototype.enterDeclare_spec = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#declare_spec.
PLSQLListener.prototype.exitDeclare_spec = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#variable_declaration.
PLSQLListener.prototype.enterVariable_declaration = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#variable_declaration.
PLSQLListener.prototype.exitVariable_declaration = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#subtype_declaration.
PLSQLListener.prototype.enterSubtype_declaration = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#subtype_declaration.
PLSQLListener.prototype.exitSubtype_declaration = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#cursor_declaration.
PLSQLListener.prototype.enterCursor_declaration = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#cursor_declaration.
PLSQLListener.prototype.exitCursor_declaration = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#parameter_spec.
PLSQLListener.prototype.enterParameter_spec = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#parameter_spec.
PLSQLListener.prototype.exitParameter_spec = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#exception_declaration.
PLSQLListener.prototype.enterException_declaration = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#exception_declaration.
PLSQLListener.prototype.exitException_declaration = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#pragma_declaration.
PLSQLListener.prototype.enterPragma_declaration = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#pragma_declaration.
PLSQLListener.prototype.exitPragma_declaration = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#record_declaration.
PLSQLListener.prototype.enterRecord_declaration = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#record_declaration.
PLSQLListener.prototype.exitRecord_declaration = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#record_type_dec.
PLSQLListener.prototype.enterRecord_type_dec = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#record_type_dec.
PLSQLListener.prototype.exitRecord_type_dec = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#field_spec.
PLSQLListener.prototype.enterField_spec = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#field_spec.
PLSQLListener.prototype.exitField_spec = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#record_var_dec.
PLSQLListener.prototype.enterRecord_var_dec = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#record_var_dec.
PLSQLListener.prototype.exitRecord_var_dec = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#table_declaration.
PLSQLListener.prototype.enterTable_declaration = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#table_declaration.
PLSQLListener.prototype.exitTable_declaration = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#table_type_dec.
PLSQLListener.prototype.enterTable_type_dec = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#table_type_dec.
PLSQLListener.prototype.exitTable_type_dec = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#table_indexed_by_part.
PLSQLListener.prototype.enterTable_indexed_by_part = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#table_indexed_by_part.
PLSQLListener.prototype.exitTable_indexed_by_part = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#varray_type_def.
PLSQLListener.prototype.enterVarray_type_def = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#varray_type_def.
PLSQLListener.prototype.exitVarray_type_def = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#table_var_dec.
PLSQLListener.prototype.enterTable_var_dec = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#table_var_dec.
PLSQLListener.prototype.exitTable_var_dec = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#seq_of_statements.
PLSQLListener.prototype.enterSeq_of_statements = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#seq_of_statements.
PLSQLListener.prototype.exitSeq_of_statements = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#label_declaration.
PLSQLListener.prototype.enterLabel_declaration = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#label_declaration.
PLSQLListener.prototype.exitLabel_declaration = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#statement.
PLSQLListener.prototype.enterStatement = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#statement.
PLSQLListener.prototype.exitStatement = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#assignment_statement.
PLSQLListener.prototype.enterAssignment_statement = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#assignment_statement.
PLSQLListener.prototype.exitAssignment_statement = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#continue_statement.
PLSQLListener.prototype.enterContinue_statement = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#continue_statement.
PLSQLListener.prototype.exitContinue_statement = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#exit_statement.
PLSQLListener.prototype.enterExit_statement = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#exit_statement.
PLSQLListener.prototype.exitExit_statement = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#goto_statement.
PLSQLListener.prototype.enterGoto_statement = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#goto_statement.
PLSQLListener.prototype.exitGoto_statement = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#if_statement.
PLSQLListener.prototype.enterIf_statement = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#if_statement.
PLSQLListener.prototype.exitIf_statement = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#elsif_part.
PLSQLListener.prototype.enterElsif_part = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#elsif_part.
PLSQLListener.prototype.exitElsif_part = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#else_part.
PLSQLListener.prototype.enterElse_part = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#else_part.
PLSQLListener.prototype.exitElse_part = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#loop_statement.
PLSQLListener.prototype.enterLoop_statement = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#loop_statement.
PLSQLListener.prototype.exitLoop_statement = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#cursor_loop_param.
PLSQLListener.prototype.enterCursor_loop_param = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#cursor_loop_param.
PLSQLListener.prototype.exitCursor_loop_param = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#forall_statement.
PLSQLListener.prototype.enterForall_statement = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#forall_statement.
PLSQLListener.prototype.exitForall_statement = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#bounds_clause.
PLSQLListener.prototype.enterBounds_clause = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#bounds_clause.
PLSQLListener.prototype.exitBounds_clause = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#between_bound.
PLSQLListener.prototype.enterBetween_bound = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#between_bound.
PLSQLListener.prototype.exitBetween_bound = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#lower_bound.
PLSQLListener.prototype.enterLower_bound = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#lower_bound.
PLSQLListener.prototype.exitLower_bound = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#upper_bound.
PLSQLListener.prototype.enterUpper_bound = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#upper_bound.
PLSQLListener.prototype.exitUpper_bound = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#null_statement.
PLSQLListener.prototype.enterNull_statement = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#null_statement.
PLSQLListener.prototype.exitNull_statement = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#raise_statement.
PLSQLListener.prototype.enterRaise_statement = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#raise_statement.
PLSQLListener.prototype.exitRaise_statement = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#return_statement.
PLSQLListener.prototype.enterReturn_statement = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#return_statement.
PLSQLListener.prototype.exitReturn_statement = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#function_call.
PLSQLListener.prototype.enterFunction_call = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#function_call.
PLSQLListener.prototype.exitFunction_call = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#body.
PLSQLListener.prototype.enterBody = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#body.
PLSQLListener.prototype.exitBody = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#exception_clause.
PLSQLListener.prototype.enterException_clause = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#exception_clause.
PLSQLListener.prototype.exitException_clause = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#exception_handler.
PLSQLListener.prototype.enterException_handler = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#exception_handler.
PLSQLListener.prototype.exitException_handler = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#trigger_block.
PLSQLListener.prototype.enterTrigger_block = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#trigger_block.
PLSQLListener.prototype.exitTrigger_block = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#block.
PLSQLListener.prototype.enterBlock = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#block.
PLSQLListener.prototype.exitBlock = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#sql_statement.
PLSQLListener.prototype.enterSql_statement = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#sql_statement.
PLSQLListener.prototype.exitSql_statement = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#execute_immediate.
PLSQLListener.prototype.enterExecute_immediate = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#execute_immediate.
PLSQLListener.prototype.exitExecute_immediate = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#dynamic_returning_clause.
PLSQLListener.prototype.enterDynamic_returning_clause = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#dynamic_returning_clause.
PLSQLListener.prototype.exitDynamic_returning_clause = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#data_manipulation_language_statements.
PLSQLListener.prototype.enterData_manipulation_language_statements = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#data_manipulation_language_statements.
PLSQLListener.prototype.exitData_manipulation_language_statements = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#cursor_manipulation_statements.
PLSQLListener.prototype.enterCursor_manipulation_statements = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#cursor_manipulation_statements.
PLSQLListener.prototype.exitCursor_manipulation_statements = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#close_statement.
PLSQLListener.prototype.enterClose_statement = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#close_statement.
PLSQLListener.prototype.exitClose_statement = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#open_statement.
PLSQLListener.prototype.enterOpen_statement = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#open_statement.
PLSQLListener.prototype.exitOpen_statement = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#fetch_statement.
PLSQLListener.prototype.enterFetch_statement = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#fetch_statement.
PLSQLListener.prototype.exitFetch_statement = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#open_for_statement.
PLSQLListener.prototype.enterOpen_for_statement = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#open_for_statement.
PLSQLListener.prototype.exitOpen_for_statement = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#transaction_control_statements.
PLSQLListener.prototype.enterTransaction_control_statements = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#transaction_control_statements.
PLSQLListener.prototype.exitTransaction_control_statements = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#set_transaction_command.
PLSQLListener.prototype.enterSet_transaction_command = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#set_transaction_command.
PLSQLListener.prototype.exitSet_transaction_command = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#set_constraint_command.
PLSQLListener.prototype.enterSet_constraint_command = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#set_constraint_command.
PLSQLListener.prototype.exitSet_constraint_command = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#commit_statement.
PLSQLListener.prototype.enterCommit_statement = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#commit_statement.
PLSQLListener.prototype.exitCommit_statement = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#write_clause.
PLSQLListener.prototype.enterWrite_clause = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#write_clause.
PLSQLListener.prototype.exitWrite_clause = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#rollback_statement.
PLSQLListener.prototype.enterRollback_statement = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#rollback_statement.
PLSQLListener.prototype.exitRollback_statement = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#savepoint_statement.
PLSQLListener.prototype.enterSavepoint_statement = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#savepoint_statement.
PLSQLListener.prototype.exitSavepoint_statement = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#explain_statement.
PLSQLListener.prototype.enterExplain_statement = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#explain_statement.
PLSQLListener.prototype.exitExplain_statement = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#select_statement.
PLSQLListener.prototype.enterSelect_statement = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#select_statement.
PLSQLListener.prototype.exitSelect_statement = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#subquery_factoring_clause.
PLSQLListener.prototype.enterSubquery_factoring_clause = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#subquery_factoring_clause.
PLSQLListener.prototype.exitSubquery_factoring_clause = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#factoring_element.
PLSQLListener.prototype.enterFactoring_element = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#factoring_element.
PLSQLListener.prototype.exitFactoring_element = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#search_clause.
PLSQLListener.prototype.enterSearch_clause = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#search_clause.
PLSQLListener.prototype.exitSearch_clause = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#cycle_clause.
PLSQLListener.prototype.enterCycle_clause = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#cycle_clause.
PLSQLListener.prototype.exitCycle_clause = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#subquery.
PLSQLListener.prototype.enterSubquery = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#subquery.
PLSQLListener.prototype.exitSubquery = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#subquery_operation_part.
PLSQLListener.prototype.enterSubquery_operation_part = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#subquery_operation_part.
PLSQLListener.prototype.exitSubquery_operation_part = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#subquery_basic_elements.
PLSQLListener.prototype.enterSubquery_basic_elements = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#subquery_basic_elements.
PLSQLListener.prototype.exitSubquery_basic_elements = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#query_block.
PLSQLListener.prototype.enterQuery_block = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#query_block.
PLSQLListener.prototype.exitQuery_block = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#selected_element.
PLSQLListener.prototype.enterSelected_element = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#selected_element.
PLSQLListener.prototype.exitSelected_element = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#from_clause.
PLSQLListener.prototype.enterFrom_clause = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#from_clause.
PLSQLListener.prototype.exitFrom_clause = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#select_list_elements.
PLSQLListener.prototype.enterSelect_list_elements = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#select_list_elements.
PLSQLListener.prototype.exitSelect_list_elements = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#table_ref_list.
PLSQLListener.prototype.enterTable_ref_list = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#table_ref_list.
PLSQLListener.prototype.exitTable_ref_list = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#table_ref.
PLSQLListener.prototype.enterTable_ref = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#table_ref.
PLSQLListener.prototype.exitTable_ref = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#table_ref_aux.
PLSQLListener.prototype.enterTable_ref_aux = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#table_ref_aux.
PLSQLListener.prototype.exitTable_ref_aux = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#join_clause.
PLSQLListener.prototype.enterJoin_clause = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#join_clause.
PLSQLListener.prototype.exitJoin_clause = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#join_on_part.
PLSQLListener.prototype.enterJoin_on_part = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#join_on_part.
PLSQLListener.prototype.exitJoin_on_part = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#join_using_part.
PLSQLListener.prototype.enterJoin_using_part = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#join_using_part.
PLSQLListener.prototype.exitJoin_using_part = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#outer_join_type.
PLSQLListener.prototype.enterOuter_join_type = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#outer_join_type.
PLSQLListener.prototype.exitOuter_join_type = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#query_partition_clause.
PLSQLListener.prototype.enterQuery_partition_clause = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#query_partition_clause.
PLSQLListener.prototype.exitQuery_partition_clause = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#flashback_query_clause.
PLSQLListener.prototype.enterFlashback_query_clause = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#flashback_query_clause.
PLSQLListener.prototype.exitFlashback_query_clause = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#pivot_clause.
PLSQLListener.prototype.enterPivot_clause = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#pivot_clause.
PLSQLListener.prototype.exitPivot_clause = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#pivot_element.
PLSQLListener.prototype.enterPivot_element = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#pivot_element.
PLSQLListener.prototype.exitPivot_element = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#pivot_for_clause.
PLSQLListener.prototype.enterPivot_for_clause = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#pivot_for_clause.
PLSQLListener.prototype.exitPivot_for_clause = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#pivot_in_clause.
PLSQLListener.prototype.enterPivot_in_clause = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#pivot_in_clause.
PLSQLListener.prototype.exitPivot_in_clause = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#pivot_in_clause_element.
PLSQLListener.prototype.enterPivot_in_clause_element = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#pivot_in_clause_element.
PLSQLListener.prototype.exitPivot_in_clause_element = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#pivot_in_clause_elements.
PLSQLListener.prototype.enterPivot_in_clause_elements = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#pivot_in_clause_elements.
PLSQLListener.prototype.exitPivot_in_clause_elements = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#unpivot_clause.
PLSQLListener.prototype.enterUnpivot_clause = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#unpivot_clause.
PLSQLListener.prototype.exitUnpivot_clause = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#unpivot_in_clause.
PLSQLListener.prototype.enterUnpivot_in_clause = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#unpivot_in_clause.
PLSQLListener.prototype.exitUnpivot_in_clause = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#unpivot_in_elements.
PLSQLListener.prototype.enterUnpivot_in_elements = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#unpivot_in_elements.
PLSQLListener.prototype.exitUnpivot_in_elements = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#hierarchical_query_clause.
PLSQLListener.prototype.enterHierarchical_query_clause = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#hierarchical_query_clause.
PLSQLListener.prototype.exitHierarchical_query_clause = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#start_part.
PLSQLListener.prototype.enterStart_part = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#start_part.
PLSQLListener.prototype.exitStart_part = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#group_by_clause.
PLSQLListener.prototype.enterGroup_by_clause = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#group_by_clause.
PLSQLListener.prototype.exitGroup_by_clause = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#group_by_elements.
PLSQLListener.prototype.enterGroup_by_elements = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#group_by_elements.
PLSQLListener.prototype.exitGroup_by_elements = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#rollup_cube_clause.
PLSQLListener.prototype.enterRollup_cube_clause = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#rollup_cube_clause.
PLSQLListener.prototype.exitRollup_cube_clause = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#grouping_sets_clause.
PLSQLListener.prototype.enterGrouping_sets_clause = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#grouping_sets_clause.
PLSQLListener.prototype.exitGrouping_sets_clause = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#grouping_sets_elements.
PLSQLListener.prototype.enterGrouping_sets_elements = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#grouping_sets_elements.
PLSQLListener.prototype.exitGrouping_sets_elements = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#having_clause.
PLSQLListener.prototype.enterHaving_clause = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#having_clause.
PLSQLListener.prototype.exitHaving_clause = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#model_clause.
PLSQLListener.prototype.enterModel_clause = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#model_clause.
PLSQLListener.prototype.exitModel_clause = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#cell_reference_options.
PLSQLListener.prototype.enterCell_reference_options = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#cell_reference_options.
PLSQLListener.prototype.exitCell_reference_options = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#return_rows_clause.
PLSQLListener.prototype.enterReturn_rows_clause = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#return_rows_clause.
PLSQLListener.prototype.exitReturn_rows_clause = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#reference_model.
PLSQLListener.prototype.enterReference_model = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#reference_model.
PLSQLListener.prototype.exitReference_model = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#main_model.
PLSQLListener.prototype.enterMain_model = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#main_model.
PLSQLListener.prototype.exitMain_model = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#model_column_clauses.
PLSQLListener.prototype.enterModel_column_clauses = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#model_column_clauses.
PLSQLListener.prototype.exitModel_column_clauses = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#model_column_partition_part.
PLSQLListener.prototype.enterModel_column_partition_part = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#model_column_partition_part.
PLSQLListener.prototype.exitModel_column_partition_part = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#model_column_list.
PLSQLListener.prototype.enterModel_column_list = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#model_column_list.
PLSQLListener.prototype.exitModel_column_list = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#model_column.
PLSQLListener.prototype.enterModel_column = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#model_column.
PLSQLListener.prototype.exitModel_column = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#model_rules_clause.
PLSQLListener.prototype.enterModel_rules_clause = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#model_rules_clause.
PLSQLListener.prototype.exitModel_rules_clause = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#model_rules_part.
PLSQLListener.prototype.enterModel_rules_part = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#model_rules_part.
PLSQLListener.prototype.exitModel_rules_part = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#model_rules_element.
PLSQLListener.prototype.enterModel_rules_element = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#model_rules_element.
PLSQLListener.prototype.exitModel_rules_element = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#cell_assignment.
PLSQLListener.prototype.enterCell_assignment = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#cell_assignment.
PLSQLListener.prototype.exitCell_assignment = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#model_iterate_clause.
PLSQLListener.prototype.enterModel_iterate_clause = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#model_iterate_clause.
PLSQLListener.prototype.exitModel_iterate_clause = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#until_part.
PLSQLListener.prototype.enterUntil_part = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#until_part.
PLSQLListener.prototype.exitUntil_part = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#order_by_clause.
PLSQLListener.prototype.enterOrder_by_clause = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#order_by_clause.
PLSQLListener.prototype.exitOrder_by_clause = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#order_by_elements.
PLSQLListener.prototype.enterOrder_by_elements = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#order_by_elements.
PLSQLListener.prototype.exitOrder_by_elements = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#for_update_clause.
PLSQLListener.prototype.enterFor_update_clause = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#for_update_clause.
PLSQLListener.prototype.exitFor_update_clause = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#for_update_of_part.
PLSQLListener.prototype.enterFor_update_of_part = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#for_update_of_part.
PLSQLListener.prototype.exitFor_update_of_part = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#for_update_options.
PLSQLListener.prototype.enterFor_update_options = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#for_update_options.
PLSQLListener.prototype.exitFor_update_options = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#update_statement.
PLSQLListener.prototype.enterUpdate_statement = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#update_statement.
PLSQLListener.prototype.exitUpdate_statement = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#update_set_clause.
PLSQLListener.prototype.enterUpdate_set_clause = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#update_set_clause.
PLSQLListener.prototype.exitUpdate_set_clause = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#column_based_update_set_clause.
PLSQLListener.prototype.enterColumn_based_update_set_clause = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#column_based_update_set_clause.
PLSQLListener.prototype.exitColumn_based_update_set_clause = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#delete_statement.
PLSQLListener.prototype.enterDelete_statement = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#delete_statement.
PLSQLListener.prototype.exitDelete_statement = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#insert_statement.
PLSQLListener.prototype.enterInsert_statement = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#insert_statement.
PLSQLListener.prototype.exitInsert_statement = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#single_table_insert.
PLSQLListener.prototype.enterSingle_table_insert = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#single_table_insert.
PLSQLListener.prototype.exitSingle_table_insert = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#multi_table_insert.
PLSQLListener.prototype.enterMulti_table_insert = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#multi_table_insert.
PLSQLListener.prototype.exitMulti_table_insert = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#multi_table_element.
PLSQLListener.prototype.enterMulti_table_element = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#multi_table_element.
PLSQLListener.prototype.exitMulti_table_element = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#conditional_insert_clause.
PLSQLListener.prototype.enterConditional_insert_clause = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#conditional_insert_clause.
PLSQLListener.prototype.exitConditional_insert_clause = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#conditional_insert_when_part.
PLSQLListener.prototype.enterConditional_insert_when_part = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#conditional_insert_when_part.
PLSQLListener.prototype.exitConditional_insert_when_part = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#conditional_insert_else_part.
PLSQLListener.prototype.enterConditional_insert_else_part = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#conditional_insert_else_part.
PLSQLListener.prototype.exitConditional_insert_else_part = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#insert_into_clause.
PLSQLListener.prototype.enterInsert_into_clause = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#insert_into_clause.
PLSQLListener.prototype.exitInsert_into_clause = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#values_clause.
PLSQLListener.prototype.enterValues_clause = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#values_clause.
PLSQLListener.prototype.exitValues_clause = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#merge_statement.
PLSQLListener.prototype.enterMerge_statement = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#merge_statement.
PLSQLListener.prototype.exitMerge_statement = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#merge_update_clause.
PLSQLListener.prototype.enterMerge_update_clause = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#merge_update_clause.
PLSQLListener.prototype.exitMerge_update_clause = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#merge_element.
PLSQLListener.prototype.enterMerge_element = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#merge_element.
PLSQLListener.prototype.exitMerge_element = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#merge_update_delete_part.
PLSQLListener.prototype.enterMerge_update_delete_part = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#merge_update_delete_part.
PLSQLListener.prototype.exitMerge_update_delete_part = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#merge_insert_clause.
PLSQLListener.prototype.enterMerge_insert_clause = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#merge_insert_clause.
PLSQLListener.prototype.exitMerge_insert_clause = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#selected_tableview.
PLSQLListener.prototype.enterSelected_tableview = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#selected_tableview.
PLSQLListener.prototype.exitSelected_tableview = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#lock_table_statement.
PLSQLListener.prototype.enterLock_table_statement = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#lock_table_statement.
PLSQLListener.prototype.exitLock_table_statement = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#wait_nowait_part.
PLSQLListener.prototype.enterWait_nowait_part = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#wait_nowait_part.
PLSQLListener.prototype.exitWait_nowait_part = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#lock_table_element.
PLSQLListener.prototype.enterLock_table_element = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#lock_table_element.
PLSQLListener.prototype.exitLock_table_element = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#lock_mode.
PLSQLListener.prototype.enterLock_mode = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#lock_mode.
PLSQLListener.prototype.exitLock_mode = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#general_table_ref.
PLSQLListener.prototype.enterGeneral_table_ref = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#general_table_ref.
PLSQLListener.prototype.exitGeneral_table_ref = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#static_returning_clause.
PLSQLListener.prototype.enterStatic_returning_clause = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#static_returning_clause.
PLSQLListener.prototype.exitStatic_returning_clause = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#error_logging_clause.
PLSQLListener.prototype.enterError_logging_clause = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#error_logging_clause.
PLSQLListener.prototype.exitError_logging_clause = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#error_logging_into_part.
PLSQLListener.prototype.enterError_logging_into_part = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#error_logging_into_part.
PLSQLListener.prototype.exitError_logging_into_part = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#error_logging_reject_part.
PLSQLListener.prototype.enterError_logging_reject_part = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#error_logging_reject_part.
PLSQLListener.prototype.exitError_logging_reject_part = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#dml_table_expression_clause.
PLSQLListener.prototype.enterDml_table_expression_clause = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#dml_table_expression_clause.
PLSQLListener.prototype.exitDml_table_expression_clause = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#table_collection_expression.
PLSQLListener.prototype.enterTable_collection_expression = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#table_collection_expression.
PLSQLListener.prototype.exitTable_collection_expression = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#subquery_restriction_clause.
PLSQLListener.prototype.enterSubquery_restriction_clause = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#subquery_restriction_clause.
PLSQLListener.prototype.exitSubquery_restriction_clause = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#sample_clause.
PLSQLListener.prototype.enterSample_clause = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#sample_clause.
PLSQLListener.prototype.exitSample_clause = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#seed_part.
PLSQLListener.prototype.enterSeed_part = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#seed_part.
PLSQLListener.prototype.exitSeed_part = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#cursor_expression.
PLSQLListener.prototype.enterCursor_expression = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#cursor_expression.
PLSQLListener.prototype.exitCursor_expression = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#expression_list.
PLSQLListener.prototype.enterExpression_list = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#expression_list.
PLSQLListener.prototype.exitExpression_list = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#condition.
PLSQLListener.prototype.enterCondition = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#condition.
PLSQLListener.prototype.exitCondition = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#condition_wrapper.
PLSQLListener.prototype.enterCondition_wrapper = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#condition_wrapper.
PLSQLListener.prototype.exitCondition_wrapper = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#expression.
PLSQLListener.prototype.enterExpression = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#expression.
PLSQLListener.prototype.exitExpression = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#expression_wrapper.
PLSQLListener.prototype.enterExpression_wrapper = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#expression_wrapper.
PLSQLListener.prototype.exitExpression_wrapper = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#logical_and_expression.
PLSQLListener.prototype.enterLogical_and_expression = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#logical_and_expression.
PLSQLListener.prototype.exitLogical_and_expression = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#negated_expression.
PLSQLListener.prototype.enterNegated_expression = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#negated_expression.
PLSQLListener.prototype.exitNegated_expression = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#equality_expression.
PLSQLListener.prototype.enterEquality_expression = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#equality_expression.
PLSQLListener.prototype.exitEquality_expression = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#multiset_expression.
PLSQLListener.prototype.enterMultiset_expression = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#multiset_expression.
PLSQLListener.prototype.exitMultiset_expression = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#multiset_type.
PLSQLListener.prototype.enterMultiset_type = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#multiset_type.
PLSQLListener.prototype.exitMultiset_type = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#relational_expression.
PLSQLListener.prototype.enterRelational_expression = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#relational_expression.
PLSQLListener.prototype.exitRelational_expression = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#compound_expression.
PLSQLListener.prototype.enterCompound_expression = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#compound_expression.
PLSQLListener.prototype.exitCompound_expression = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#like_type.
PLSQLListener.prototype.enterLike_type = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#like_type.
PLSQLListener.prototype.exitLike_type = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#like_escape_part.
PLSQLListener.prototype.enterLike_escape_part = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#like_escape_part.
PLSQLListener.prototype.exitLike_escape_part = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#in_elements.
PLSQLListener.prototype.enterIn_elements = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#in_elements.
PLSQLListener.prototype.exitIn_elements = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#between_elements.
PLSQLListener.prototype.enterBetween_elements = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#between_elements.
PLSQLListener.prototype.exitBetween_elements = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#concatenation.
PLSQLListener.prototype.enterConcatenation = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#concatenation.
PLSQLListener.prototype.exitConcatenation = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#concatenation_wrapper.
PLSQLListener.prototype.enterConcatenation_wrapper = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#concatenation_wrapper.
PLSQLListener.prototype.exitConcatenation_wrapper = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#additive_expression.
PLSQLListener.prototype.enterAdditive_expression = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#additive_expression.
PLSQLListener.prototype.exitAdditive_expression = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#multiply_expression.
PLSQLListener.prototype.enterMultiply_expression = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#multiply_expression.
PLSQLListener.prototype.exitMultiply_expression = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#datetime_expression.
PLSQLListener.prototype.enterDatetime_expression = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#datetime_expression.
PLSQLListener.prototype.exitDatetime_expression = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#interval_expression.
PLSQLListener.prototype.enterInterval_expression = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#interval_expression.
PLSQLListener.prototype.exitInterval_expression = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#model_expression.
PLSQLListener.prototype.enterModel_expression = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#model_expression.
PLSQLListener.prototype.exitModel_expression = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#model_expression_element.
PLSQLListener.prototype.enterModel_expression_element = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#model_expression_element.
PLSQLListener.prototype.exitModel_expression_element = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#single_column_for_loop.
PLSQLListener.prototype.enterSingle_column_for_loop = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#single_column_for_loop.
PLSQLListener.prototype.exitSingle_column_for_loop = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#for_like_part.
PLSQLListener.prototype.enterFor_like_part = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#for_like_part.
PLSQLListener.prototype.exitFor_like_part = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#for_increment_decrement_type.
PLSQLListener.prototype.enterFor_increment_decrement_type = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#for_increment_decrement_type.
PLSQLListener.prototype.exitFor_increment_decrement_type = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#multi_column_for_loop.
PLSQLListener.prototype.enterMulti_column_for_loop = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#multi_column_for_loop.
PLSQLListener.prototype.exitMulti_column_for_loop = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#unary_expression.
PLSQLListener.prototype.enterUnary_expression = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#unary_expression.
PLSQLListener.prototype.exitUnary_expression = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#case_statement.
PLSQLListener.prototype.enterCase_statement = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#case_statement.
PLSQLListener.prototype.exitCase_statement = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#simple_case_statement.
PLSQLListener.prototype.enterSimple_case_statement = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#simple_case_statement.
PLSQLListener.prototype.exitSimple_case_statement = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#simple_case_when_part.
PLSQLListener.prototype.enterSimple_case_when_part = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#simple_case_when_part.
PLSQLListener.prototype.exitSimple_case_when_part = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#searched_case_statement.
PLSQLListener.prototype.enterSearched_case_statement = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#searched_case_statement.
PLSQLListener.prototype.exitSearched_case_statement = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#searched_case_when_part.
PLSQLListener.prototype.enterSearched_case_when_part = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#searched_case_when_part.
PLSQLListener.prototype.exitSearched_case_when_part = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#case_else_part.
PLSQLListener.prototype.enterCase_else_part = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#case_else_part.
PLSQLListener.prototype.exitCase_else_part = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#atom.
PLSQLListener.prototype.enterAtom = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#atom.
PLSQLListener.prototype.exitAtom = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#expression_or_vector.
PLSQLListener.prototype.enterExpression_or_vector = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#expression_or_vector.
PLSQLListener.prototype.exitExpression_or_vector = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#vector_expr.
PLSQLListener.prototype.enterVector_expr = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#vector_expr.
PLSQLListener.prototype.exitVector_expr = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#quantified_expression.
PLSQLListener.prototype.enterQuantified_expression = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#quantified_expression.
PLSQLListener.prototype.exitQuantified_expression = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#standard_function.
PLSQLListener.prototype.enterStandard_function = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#standard_function.
PLSQLListener.prototype.exitStandard_function = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#over_clause_keyword.
PLSQLListener.prototype.enterOver_clause_keyword = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#over_clause_keyword.
PLSQLListener.prototype.exitOver_clause_keyword = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#within_or_over_clause_keyword.
PLSQLListener.prototype.enterWithin_or_over_clause_keyword = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#within_or_over_clause_keyword.
PLSQLListener.prototype.exitWithin_or_over_clause_keyword = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#standard_prediction_function_keyword.
PLSQLListener.prototype.enterStandard_prediction_function_keyword = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#standard_prediction_function_keyword.
PLSQLListener.prototype.exitStandard_prediction_function_keyword = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#over_clause.
PLSQLListener.prototype.enterOver_clause = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#over_clause.
PLSQLListener.prototype.exitOver_clause = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#windowing_clause.
PLSQLListener.prototype.enterWindowing_clause = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#windowing_clause.
PLSQLListener.prototype.exitWindowing_clause = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#windowing_type.
PLSQLListener.prototype.enterWindowing_type = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#windowing_type.
PLSQLListener.prototype.exitWindowing_type = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#windowing_elements.
PLSQLListener.prototype.enterWindowing_elements = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#windowing_elements.
PLSQLListener.prototype.exitWindowing_elements = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#using_clause.
PLSQLListener.prototype.enterUsing_clause = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#using_clause.
PLSQLListener.prototype.exitUsing_clause = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#using_element.
PLSQLListener.prototype.enterUsing_element = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#using_element.
PLSQLListener.prototype.exitUsing_element = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#collect_order_by_part.
PLSQLListener.prototype.enterCollect_order_by_part = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#collect_order_by_part.
PLSQLListener.prototype.exitCollect_order_by_part = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#within_or_over_part.
PLSQLListener.prototype.enterWithin_or_over_part = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#within_or_over_part.
PLSQLListener.prototype.exitWithin_or_over_part = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#cost_matrix_clause.
PLSQLListener.prototype.enterCost_matrix_clause = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#cost_matrix_clause.
PLSQLListener.prototype.exitCost_matrix_clause = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#xml_passing_clause.
PLSQLListener.prototype.enterXml_passing_clause = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#xml_passing_clause.
PLSQLListener.prototype.exitXml_passing_clause = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#xml_attributes_clause.
PLSQLListener.prototype.enterXml_attributes_clause = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#xml_attributes_clause.
PLSQLListener.prototype.exitXml_attributes_clause = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#xml_namespaces_clause.
PLSQLListener.prototype.enterXml_namespaces_clause = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#xml_namespaces_clause.
PLSQLListener.prototype.exitXml_namespaces_clause = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#xml_table_column.
PLSQLListener.prototype.enterXml_table_column = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#xml_table_column.
PLSQLListener.prototype.exitXml_table_column = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#xml_general_default_part.
PLSQLListener.prototype.enterXml_general_default_part = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#xml_general_default_part.
PLSQLListener.prototype.exitXml_general_default_part = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#xml_multiuse_expression_element.
PLSQLListener.prototype.enterXml_multiuse_expression_element = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#xml_multiuse_expression_element.
PLSQLListener.prototype.exitXml_multiuse_expression_element = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#xmlroot_param_version_part.
PLSQLListener.prototype.enterXmlroot_param_version_part = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#xmlroot_param_version_part.
PLSQLListener.prototype.exitXmlroot_param_version_part = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#xmlroot_param_standalone_part.
PLSQLListener.prototype.enterXmlroot_param_standalone_part = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#xmlroot_param_standalone_part.
PLSQLListener.prototype.exitXmlroot_param_standalone_part = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#xmlserialize_param_enconding_part.
PLSQLListener.prototype.enterXmlserialize_param_enconding_part = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#xmlserialize_param_enconding_part.
PLSQLListener.prototype.exitXmlserialize_param_enconding_part = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#xmlserialize_param_version_part.
PLSQLListener.prototype.enterXmlserialize_param_version_part = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#xmlserialize_param_version_part.
PLSQLListener.prototype.exitXmlserialize_param_version_part = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#xmlserialize_param_ident_part.
PLSQLListener.prototype.enterXmlserialize_param_ident_part = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#xmlserialize_param_ident_part.
PLSQLListener.prototype.exitXmlserialize_param_ident_part = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#sql_plus_command.
PLSQLListener.prototype.enterSql_plus_command = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#sql_plus_command.
PLSQLListener.prototype.exitSql_plus_command = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#whenever_command.
PLSQLListener.prototype.enterWhenever_command = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#whenever_command.
PLSQLListener.prototype.exitWhenever_command = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#set_command.
PLSQLListener.prototype.enterSet_command = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#set_command.
PLSQLListener.prototype.exitSet_command = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#exit_command.
PLSQLListener.prototype.enterExit_command = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#exit_command.
PLSQLListener.prototype.exitExit_command = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#prompt_command.
PLSQLListener.prototype.enterPrompt_command = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#prompt_command.
PLSQLListener.prototype.exitPrompt_command = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#partition_extension_clause.
PLSQLListener.prototype.enterPartition_extension_clause = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#partition_extension_clause.
PLSQLListener.prototype.exitPartition_extension_clause = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#column_alias.
PLSQLListener.prototype.enterColumn_alias = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#column_alias.
PLSQLListener.prototype.exitColumn_alias = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#table_alias.
PLSQLListener.prototype.enterTable_alias = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#table_alias.
PLSQLListener.prototype.exitTable_alias = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#alias_quoted_string.
PLSQLListener.prototype.enterAlias_quoted_string = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#alias_quoted_string.
PLSQLListener.prototype.exitAlias_quoted_string = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#where_clause.
PLSQLListener.prototype.enterWhere_clause = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#where_clause.
PLSQLListener.prototype.exitWhere_clause = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#current_of_clause.
PLSQLListener.prototype.enterCurrent_of_clause = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#current_of_clause.
PLSQLListener.prototype.exitCurrent_of_clause = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#into_clause.
PLSQLListener.prototype.enterInto_clause = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#into_clause.
PLSQLListener.prototype.exitInto_clause = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#xml_column_name.
PLSQLListener.prototype.enterXml_column_name = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#xml_column_name.
PLSQLListener.prototype.exitXml_column_name = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#cost_class_name.
PLSQLListener.prototype.enterCost_class_name = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#cost_class_name.
PLSQLListener.prototype.exitCost_class_name = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#attribute_name.
PLSQLListener.prototype.enterAttribute_name = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#attribute_name.
PLSQLListener.prototype.exitAttribute_name = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#savepoint_name.
PLSQLListener.prototype.enterSavepoint_name = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#savepoint_name.
PLSQLListener.prototype.exitSavepoint_name = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#rollback_segment_name.
PLSQLListener.prototype.enterRollback_segment_name = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#rollback_segment_name.
PLSQLListener.prototype.exitRollback_segment_name = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#table_var_name.
PLSQLListener.prototype.enterTable_var_name = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#table_var_name.
PLSQLListener.prototype.exitTable_var_name = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#schema_name.
PLSQLListener.prototype.enterSchema_name = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#schema_name.
PLSQLListener.prototype.exitSchema_name = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#routine_name.
PLSQLListener.prototype.enterRoutine_name = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#routine_name.
PLSQLListener.prototype.exitRoutine_name = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#package_name.
PLSQLListener.prototype.enterPackage_name = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#package_name.
PLSQLListener.prototype.exitPackage_name = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#implementation_type_name.
PLSQLListener.prototype.enterImplementation_type_name = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#implementation_type_name.
PLSQLListener.prototype.exitImplementation_type_name = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#parameter_name.
PLSQLListener.prototype.enterParameter_name = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#parameter_name.
PLSQLListener.prototype.exitParameter_name = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#reference_model_name.
PLSQLListener.prototype.enterReference_model_name = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#reference_model_name.
PLSQLListener.prototype.exitReference_model_name = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#main_model_name.
PLSQLListener.prototype.enterMain_model_name = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#main_model_name.
PLSQLListener.prototype.exitMain_model_name = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#aggregate_function_name.
PLSQLListener.prototype.enterAggregate_function_name = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#aggregate_function_name.
PLSQLListener.prototype.exitAggregate_function_name = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#query_name.
PLSQLListener.prototype.enterQuery_name = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#query_name.
PLSQLListener.prototype.exitQuery_name = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#constraint_name.
PLSQLListener.prototype.enterConstraint_name = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#constraint_name.
PLSQLListener.prototype.exitConstraint_name = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#label_name.
PLSQLListener.prototype.enterLabel_name = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#label_name.
PLSQLListener.prototype.exitLabel_name = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#type_name.
PLSQLListener.prototype.enterType_name = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#type_name.
PLSQLListener.prototype.exitType_name = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#sequence_name.
PLSQLListener.prototype.enterSequence_name = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#sequence_name.
PLSQLListener.prototype.exitSequence_name = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#exception_name.
PLSQLListener.prototype.enterException_name = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#exception_name.
PLSQLListener.prototype.exitException_name = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#function_name.
PLSQLListener.prototype.enterFunction_name = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#function_name.
PLSQLListener.prototype.exitFunction_name = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#procedure_name.
PLSQLListener.prototype.enterProcedure_name = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#procedure_name.
PLSQLListener.prototype.exitProcedure_name = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#trigger_name.
PLSQLListener.prototype.enterTrigger_name = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#trigger_name.
PLSQLListener.prototype.exitTrigger_name = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#variable_name.
PLSQLListener.prototype.enterVariable_name = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#variable_name.
PLSQLListener.prototype.exitVariable_name = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#index_name.
PLSQLListener.prototype.enterIndex_name = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#index_name.
PLSQLListener.prototype.exitIndex_name = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#cursor_name.
PLSQLListener.prototype.enterCursor_name = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#cursor_name.
PLSQLListener.prototype.exitCursor_name = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#record_name.
PLSQLListener.prototype.enterRecord_name = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#record_name.
PLSQLListener.prototype.exitRecord_name = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#collection_name.
PLSQLListener.prototype.enterCollection_name = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#collection_name.
PLSQLListener.prototype.exitCollection_name = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#link_name.
PLSQLListener.prototype.enterLink_name = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#link_name.
PLSQLListener.prototype.exitLink_name = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#column_name.
PLSQLListener.prototype.enterColumn_name = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#column_name.
PLSQLListener.prototype.exitColumn_name = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#tableview_name.
PLSQLListener.prototype.enterTableview_name = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#tableview_name.
PLSQLListener.prototype.exitTableview_name = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#char_set_name.
PLSQLListener.prototype.enterChar_set_name = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#char_set_name.
PLSQLListener.prototype.exitChar_set_name = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#keep_clause.
PLSQLListener.prototype.enterKeep_clause = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#keep_clause.
PLSQLListener.prototype.exitKeep_clause = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#function_argument.
PLSQLListener.prototype.enterFunction_argument = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#function_argument.
PLSQLListener.prototype.exitFunction_argument = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#function_argument_analytic.
PLSQLListener.prototype.enterFunction_argument_analytic = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#function_argument_analytic.
PLSQLListener.prototype.exitFunction_argument_analytic = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#function_argument_modeling.
PLSQLListener.prototype.enterFunction_argument_modeling = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#function_argument_modeling.
PLSQLListener.prototype.exitFunction_argument_modeling = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#respect_or_ignore_nulls.
PLSQLListener.prototype.enterRespect_or_ignore_nulls = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#respect_or_ignore_nulls.
PLSQLListener.prototype.exitRespect_or_ignore_nulls = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#argument.
PLSQLListener.prototype.enterArgument = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#argument.
PLSQLListener.prototype.exitArgument = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#type_spec.
PLSQLListener.prototype.enterType_spec = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#type_spec.
PLSQLListener.prototype.exitType_spec = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#datatype.
PLSQLListener.prototype.enterDatatype = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#datatype.
PLSQLListener.prototype.exitDatatype = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#precision_part.
PLSQLListener.prototype.enterPrecision_part = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#precision_part.
PLSQLListener.prototype.exitPrecision_part = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#native_datatype_element.
PLSQLListener.prototype.enterNative_datatype_element = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#native_datatype_element.
PLSQLListener.prototype.exitNative_datatype_element = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#bind_variable.
PLSQLListener.prototype.enterBind_variable = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#bind_variable.
PLSQLListener.prototype.exitBind_variable = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#general_element.
PLSQLListener.prototype.enterGeneral_element = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#general_element.
PLSQLListener.prototype.exitGeneral_element = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#general_element_part.
PLSQLListener.prototype.enterGeneral_element_part = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#general_element_part.
PLSQLListener.prototype.exitGeneral_element_part = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#table_element.
PLSQLListener.prototype.enterTable_element = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#table_element.
PLSQLListener.prototype.exitTable_element = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#constant.
PLSQLListener.prototype.enterConstant = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#constant.
PLSQLListener.prototype.exitConstant = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#numeric.
PLSQLListener.prototype.enterNumeric = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#numeric.
PLSQLListener.prototype.exitNumeric = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#quoted_string.
PLSQLListener.prototype.enterQuoted_string = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#quoted_string.
PLSQLListener.prototype.exitQuoted_string = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#id.
PLSQLListener.prototype.enterId = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#id.
PLSQLListener.prototype.exitId = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#id_expression.
PLSQLListener.prototype.enterId_expression = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#id_expression.
PLSQLListener.prototype.exitId_expression = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#not_equal_op.
PLSQLListener.prototype.enterNot_equal_op = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#not_equal_op.
PLSQLListener.prototype.exitNot_equal_op = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#greater_than_or_equals_op.
PLSQLListener.prototype.enterGreater_than_or_equals_op = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#greater_than_or_equals_op.
PLSQLListener.prototype.exitGreater_than_or_equals_op = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#less_than_or_equals_op.
PLSQLListener.prototype.enterLess_than_or_equals_op = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#less_than_or_equals_op.
PLSQLListener.prototype.exitLess_than_or_equals_op = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#concatenation_op.
PLSQLListener.prototype.enterConcatenation_op = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#concatenation_op.
PLSQLListener.prototype.exitConcatenation_op = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#outer_join_sign.
PLSQLListener.prototype.enterOuter_join_sign = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#outer_join_sign.
PLSQLListener.prototype.exitOuter_join_sign = function(ctx) {
};


// Enter a parse tree produced by PLSQLParser#regular_id.
PLSQLListener.prototype.enterRegular_id = function(ctx) {
};

// Exit a parse tree produced by PLSQLParser#regular_id.
PLSQLListener.prototype.exitRegular_id = function(ctx) {
};

exports.PLSQLListener = PLSQLListener;
