// Copyright (c) 2022 fahrizalm14
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
export const multiple = (a: number, b: number) => a * b

describe('multiple function', () => {
  it('should return number', () => {
    expect(typeof multiple(2, 8)).toStrictEqual('number')
  })

  it('should correctly result', () => {
    expect(multiple(2, 8)).toStrictEqual(16)
  })

  it('should', () => {
    expect(multiple(2, 8)).not.toStrictEqual(8)
  })
})
