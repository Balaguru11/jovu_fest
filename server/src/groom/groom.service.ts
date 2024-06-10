import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GroomServiceBase } from "./base/groom.service.base";

@Injectable()
export class GroomService extends GroomServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
