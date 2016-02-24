antlr4 = require('antlr4');
Lexer = require("./PLSQLLexer").PLSQLLexer;
Listener = require("./PLSQLListener").PLSQLListener;
Parser = require("./PLSQLParser").PLSQLParser;

class Transform extends Listener
  enterCompilation_unit: (ctx)->
  exitCompilation_unit: (ctx)->
  enterSql_script: (ctx)->
  exitSql_script: (ctx)->
  enterUnit_statement: (ctx)->
  exitUnit_statement: (ctx)->


printree = (names, tree, ident)->    
  if tree.ruleIndex
    console.log(ident + names[tree.ruleIndex], tree.ruleIndex)
  if tree.children
    for ch in tree.children
      printree(names, ch, (ident || "") + "  ")


exports.parse = (input)->
  chars = new antlr4.InputStream(input);
  lexer = new Lexer(chars)
  tokens  = new antlr4.CommonTokenStream(lexer)
  parser = new Parser(tokens)
  parser.buildParseTrees = true
  tree = parser.sql_script()
  printree(parser.ruleNames, tree, "")
  trans = new Transform()
  antlr4.tree.ParseTreeWalker.DEFAULT.walk(trans, tree)
