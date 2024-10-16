export class ErrorRepository {
    constructor() {
        this.mistakeCodes = new Map([
            [100, "100"],
            [101, "101"],
            [102, "102"],
            [103, "103"],
        ]);
    }

    translate(code) {
        if (this.mistakeCodes.has(code)) {
            return this.mistakeCodes.get(code)
        } else {
            throw new Error("Unknown error")
        }
    }
}
