export function buildExports(moduleExports: any, isESM: boolean) {
  let ret = ''
  Object.keys(moduleExports).forEach((key) => {
    const exportExpression = isESM
      ? `export ${key === 'default' ? key : `const ${key} =`} ${
          moduleExports[key]
        }`
      : `exports.${key} = ${moduleExports[key]}`

    ret += exportExpression + '\n'
  })
  return ret
}

export function isRequireExpression(node: any) {
  // const requireSourceNode = node.arguments?.[0]
  const isRequireCall =
    node.type === 'CallExpression' &&
    node.callee?.type === 'Identifier' &&
    node.callee?.value === 'require'
  // requireSourceNode.expression?.type === 'StringLiteral'
  // console.log('isRequireCall', node, isRequireCall)
  return isRequireCall
}

export function getRequireSourceNode(node: any) {
  const sourceExpression = node.arguments?.[0].expression
  console.log('requireSource', sourceExpression.value)
  return sourceExpression.value
}
