const n = process.argv[2] || 100
const allButMainFiles = [ // 331 items
  'add.js', 'after.js', 'array.js', 'ary.js', 'assign.js', 'assignIn.js', 'assignInWith.js', 'assignWith.js', 'at.js', 'attempt.js', 'before.js', 'bind.js', 'bindAll.js', 'bindKey.js', 'camelCase.js', 'capitalize.js', 'castArray.js', 'ceil.js', 'chain.js', 'chunk.js', 'clamp.js', 'clone.js', 'cloneDeep.js', 'cloneDeepWith.js', 'cloneWith.js', 'collection.js', 'commit.js', 'compact.js', 'concat.js', 'cond.js', 'conforms.js', 'conformsTo.js', 'constant.js', 'core.js', 'core.min.js', 'countBy.js', 'create.js', 'curry.js', 'curryRight.js', 'date.js', 'debounce.js', 'deburr.js', 'defaults.js', 'defaultsDeep.js', 'defaultTo.js', 'defer.js', 'delay.js', 'difference.js', 'differenceBy.js', 'differenceWith.js', 'divide.js', 'drop.js', 'dropRight.js', 'dropRightWhile.js', 'dropWhile.js', 'each.js', 'eachRight.js', 'endsWith.js', 'entries.js', 'entriesIn.js', 'eq.js', 'escape.js', 'escapeRegExp.js', 'every.js', 'extend.js', 'extendWith.js', 'fill.js', 'filter.js', 'find.js', 'findIndex.js', 'findKey.js', 'findLast.js', 'findLastIndex.js', 'findLastKey.js', 'first.js', 'flatMap.js', 'flatMapDeep.js', 'flatMapDepth.js', 'flatten.js', 'flattenDeep.js', 'flattenDepth.js', 'flip.js', 'floor.js', 'flow.js', 'flowRight.js', 'forEach.js', 'forEachRight.js', 'forIn.js', 'forInRight.js', 'forOwn.js', 'forOwnRight.js', 'fp.js', 'fromPairs.js', 'function.js', 'functions.js', 'functionsIn.js', 'get.js', 'groupBy.js', 'gt.js', 'gte.js', 'has.js', 'hasIn.js', 'head.js', 'identity.js', 'includes.js', 'index.js', 'indexOf.js', 'initial.js', 'inRange.js', 'intersection.js', 'intersectionBy.js', 'intersectionWith.js', 'invert.js', 'invertBy.js', 'invoke.js', 'invokeMap.js', 'isArguments.js', 'isArray.js', 'isArrayBuffer.js', 'isArrayLike.js', 'isArrayLikeObject.js', 'isBoolean.js', 'isBuffer.js', 'isDate.js', 'isElement.js', 'isEmpty.js', 'isEqual.js', 'isEqualWith.js', 'isError.js', 'isFinite.js', 'isFunction.js', 'isInteger.js', 'isLength.js', 'isMap.js', 'isMatch.js', 'isMatchWith.js', 'isNaN.js', 'isNative.js', 'isNil.js', 'isNull.js', 'isNumber.js', 'isObject.js', 'isObjectLike.js', 'isPlainObject.js', 'isRegExp.js', 'isSafeInteger.js', 'isSet.js', 'isString.js', 'isSymbol.js', 'isTypedArray.js', 'isUndefined.js', 'isWeakMap.js', 'isWeakSet.js', 'iteratee.js', 'join.js', 'kebabCase.js', 'keyBy.js', 'keys.js', 'keysIn.js', 'lang.js', 'last.js', 'lastIndexOf.js', 'lowerCase.js', 'lowerFirst.js', 'lt.js', 'lte.js', 'map.js', 'mapKeys.js', 'mapValues.js', 'matches.js', 'matchesProperty.js', 'math.js', 'max.js', 'maxBy.js', 'mean.js', 'meanBy.js', 'memoize.js', 'merge.js', 'mergeWith.js', 'method.js', 'methodOf.js', 'min.js', 'minBy.js', 'mixin.js', 'multiply.js', 'negate.js', 'next.js', 'noop.js', 'now.js', 'nth.js', 'nthArg.js', 'number.js', 'object.js', 'omit.js', 'omitBy.js', 'once.js', 'orderBy.js', 'over.js', 'overArgs.js', 'overEvery.js', 'overSome.js', 'pad.js', 'padEnd.js', 'padStart.js', 'parseInt.js', 'partial.js', 'partialRight.js', 'partition.js', 'pick.js', 'pickBy.js', 'plant.js', 'property.js', 'propertyOf.js', 'pull.js', 'pullAll.js', 'pullAllBy.js', 'pullAllWith.js', 'pullAt.js', 'random.js', 'range.js', 'rangeRight.js', 'rearg.js', 'reduce.js', 'reduceRight.js', 'reject.js', 'remove.js', 'repeat.js', 'replace.js', 'rest.js', 'result.js', 'reverse.js', 'round.js', 'sample.js', 'sampleSize.js', 'seq.js', 'set.js', 'setWith.js', 'shuffle.js', 'size.js', 'slice.js', 'snakeCase.js', 'some.js', 'sortBy.js', 'sortedIndex.js', 'sortedIndexBy.js', 'sortedIndexOf.js', 'sortedLastIndex.js', 'sortedLastIndexBy.js', 'sortedLastIndexOf.js', 'sortedUniq.js', 'sortedUniqBy.js', 'split.js', 'spread.js', 'startCase.js', 'startsWith.js', 'string.js', 'stubArray.js', 'stubFalse.js', 'stubObject.js', 'stubString.js', 'stubTrue.js', 'subtract.js', 'sum.js', 'sumBy.js', 'tail.js', 'take.js', 'takeRight.js', 'takeRightWhile.js', 'takeWhile.js', 'tap.js', 'template.js', 'templateSettings.js', 'throttle.js', 'thru.js', 'times.js', 'toArray.js', 'toFinite.js', 'toInteger.js', 'toIterator.js', 'toJSON.js', 'toLength.js', 'toLower.js', 'toNumber.js', 'toPairs.js', 'toPairsIn.js', 'toPath.js', 'toPlainObject.js', 'toSafeInteger.js', 'toString.js', 'toUpper.js', 'transform.js', 'trim.js', 'trimEnd.js', 'trimStart.js', 'truncate.js', 'unary.js', 'unescape.js', 'union.js', 'unionBy.js', 'unionWith.js', 'uniq.js', 'uniqBy.js', 'uniqueId.js', 'uniqWith.js', 'unset.js', 'unzip.js', 'unzipWith.js', 'update.js', 'updateWith.js', 'upperCase.js', 'upperFirst.js', 'util.js', 'value.js', 'valueOf.js', 'values.js', 'valuesIn.js', 'without.js', 'words.js', 'wrap.js', 'wrapperAt.js', 'wrapperChain.js', 'wrapperLodash.js', 'wrapperReverse.js', 'wrapperValue.js', 'xor.js', 'xorBy.js', 'xorWith.js', 'zip.js', 'zipObject.js', 'zipObjectDeep.js', 'zipWith.js'
]

const fullLoadTime = loadFull(n)
const partialLoadTime = loadSome(n)

console.log(`${fullLoadTime}ns full load`)
console.log(`${partialLoadTime}ns load of ${n} takes`)
console.log(`full load is faster than load by file of ${n} items in ${partialLoadTime / fullLoadTime} times`)


function loadFull (n = 10) {
  const names = []
  for (let i = 0; i < n; i++) {
    names.push(`lodash`)
  }

  const start = process.hrtime.bigint()
  for (let i = 0; i < n; i++) {
    require(names[i])
  }
  const end = process.hrtime.bigint()

  return end - start
}

function loadSome (n = 10) {
  if (n > allButMainFiles.length)
    throw Error(`Please, use number less then ${allButMainFiles.length}, while provided is ${n}`)

  const fullNames = []
  for (let i = 0; i < n; i++) {
    fullNames.push(`lodash/${allButMainFiles[i]}`)
  }

  const start = process.hrtime.bigint()
  for (let i = 0; i < n; i++) {
    require(fullNames[i])
  }
  const end = process.hrtime.bigint()

  return end - start
}