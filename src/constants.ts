import JSBI from 'jsbi'
import { factory } from './cypherium_address.json'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  CYPHER_MAINNET = 16162,
  CYPHER_ROPSTEN = 16163,
  CYPHER_RINKEBY = 16164,
  CYPHER_GÖRLI = 16165,
  CYPHER_KOVAN = 16166,
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const FACTORY_ADDRESS: { [key: string]: string } = {
  [ChainId.CYPHER_MAINNET]: '0x5c4242beB94dE30b922f57241f1D02f36e906915',
  [ChainId.CYPHER_ROPSTEN]: '0x064a7dF94E8C7e63f76d10090366F538B2242eA7',
  [ChainId.CYPHER_RINKEBY]: factory,
  [ChainId.CYPHER_GÖRLI]: factory,
  [ChainId.CYPHER_KOVAN]: factory
}

export const INIT_CODE_HASH = '0x073a53aa829d7321fb4e1eb0ecafdfddcdf725c6305c033aaecf4eecab4d19d7'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
