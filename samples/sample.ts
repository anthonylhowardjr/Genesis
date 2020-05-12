import {Genesis} from "./../lib/genesis";

class Test {
    test() {
        const e = new Genesis();

        e.create<string>();
    }
}