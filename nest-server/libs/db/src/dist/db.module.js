"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DbModule = void 0;
var common_1 = require("@nestjs/common");
var db_service_1 = require("./db.service");
var nestjs_typegoose_1 = require("nestjs-typegoose");
var DbModule = /** @class */ (function () {
    function DbModule() {
    }
    DbModule = __decorate([
        common_1.Module({
            imports: [
                nestjs_typegoose_1.TypegooseModule.forRoot("mongodb://localhost/nest-api", {
                    useCreateIndex: true,
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                    useFindAndModify: false
                })
            ],
            providers: [db_service_1.DbService],
            exports: [db_service_1.DbService]
        })
    ], DbModule);
    return DbModule;
}());
exports.DbModule = DbModule;
