import "reflect-metadata"
import { container } from "tsyringe";
import { DevRepository } from "../../modules/desenvolvedores/repositories/DevRepository";
import { IDevRepository } from "../../modules/desenvolvedores/repositories/IDevRepository";
import { INivelsRepository } from "../../modules/niveis/repositories/INivelsRepository";
import { NivelsRepository } from "../../modules/niveis/repositories/NivelsRepository";




container.registerSingleton<INivelsRepository>(
    'NivelsRepository',
    NivelsRepository
)


container.registerSingleton<IDevRepository>(
    'DevRepository',
    DevRepository
)