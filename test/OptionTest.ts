import 'mocha';
import * as assert from 'power-assert';
import Option from "../lib";
import { Some, None } from "../lib";

describe("Option", () => {
    describe("Some()", () => {
        it("defined", () => {
            assert(Some("hoge").isDefined);
        });
        it("isEmpty", () => {
            assert(Some("hoge").isEmpty === false);
        });
        it("empty.defined", () => {
            assert(Some(null).isDefined === false);
        });
        it("empty.isEmpty", () => {
            assert(Some(null).isEmpty);
        });
    });
    describe("None", () => {
        it("defined", () => {
            assert(None().isDefined === false);
        });
        it("isEmpty", () => {
            assert(None().isEmpty);
        });
    });

    describe("#getOrElse", () => {
        it("returns a present optional", () => {
            assert(Some("hoge").getOrElse("fuga") === "hoge");
        });
        it("returns a default value", () => {
            assert(None().getOrElse("fuga") === "fuga");
        });
    }); 

    describe("#map", () => {
        it("returns a mapped value", () => {
            assert(Some("hoge").map(a => a.length).get() === 4);
        });
        it("returns a default value", () => {
            const opt: Option<string> = None()
            assert(opt.map(a => a.length).getOrElse(0) === 0);
        });
    }); 
});