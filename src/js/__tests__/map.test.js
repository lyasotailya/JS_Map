import { ErrorRepository } from '../map';
import { test } from "@jest/globals";


test('should error description', () => {
  let error = new ErrorRepository()
  expect(error.translate(100)).toBe("100")
  expect(error.translate(101)).toBe("101")
  expect(error.translate(102)).toBe("102")
  expect(error.translate(103)).toBe("103")
})

test('should unknown error', () => {
  let error = new ErrorRepository()
  expect(function () {
      error.translate(500)
  }).toThrow(new Error ("Unknown error"))
})
