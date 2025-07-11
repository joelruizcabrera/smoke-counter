import { __awaiter, __generator } from "tslib";
import axios from "axios";
import { useStore } from "vuex";
export function persistData(member) {
    return __awaiter(this, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.post("https://sizablepicture-eu.backendless.app/api/data/userdata", {
                        name: "test",
                    })];
                case 1:
                    res = _a.sent();
                    console.log(res);
                    console.log(member);
                    return [2 /*return*/, true];
            }
        });
    });
}
export function persistDataToStore() {
    return __awaiter(this, void 0, void 0, function () {
        var users, store;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getUsers()];
                case 1:
                    users = _a.sent();
                    store = useStore();
                    //await store.dispatch("setMembersPersist", users);
                    console.log(store);
                    console.log(users);
                    return [2 /*return*/];
            }
        });
    });
}
export function getUsers() {
    return __awaiter(this, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.get("https://sizablepicture-eu.backendless.app/api/data/userdata")];
                case 1:
                    res = _a.sent();
                    return [2 /*return*/, res.data];
            }
        });
    });
}
//# sourceMappingURL=persist.js.map