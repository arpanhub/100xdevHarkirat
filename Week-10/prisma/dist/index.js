"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const console_1 = require("console");
const prisma = new client_1.PrismaClient();
function insertINTO(username, firstName, lastName, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.create({
            data: {
                email: username,
                firstName: firstName,
                lastName: lastName,
                password: password,
            },
            select: {
                id: true,
                firstName: true
            }
        });
        (0, console_1.log)(res);
    });
}
function Update(username_1, _a) {
    return __awaiter(this, arguments, void 0, function* (username, { newEmail, password }) {
        const res = yield prisma.user.update({
            where: {
                email: username
            },
            data: {
                email: newEmail,
                password: password
            }
        });
        (0, console_1.log)(res);
    });
}
// Update("harkirat@gmail.com",{
//     newEmail:"arpu@gmail.com",
//     password:"54321"
// }); 
function getuser(username) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = yield prisma.user.findUnique({
                where: {
                    email: username
                }
            });
            (0, console_1.log)(res);
        }
        catch (error) {
            (0, console_1.log)(console.error());
        }
        finally {
            (0, console_1.log)("done");
        }
    });
}
getuser("arapangupta@gmail.com");
