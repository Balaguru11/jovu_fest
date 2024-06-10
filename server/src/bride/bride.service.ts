import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BrideServiceBase } from "./base/bride.service.base";

@Injectable()
export class BrideService extends BrideServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
