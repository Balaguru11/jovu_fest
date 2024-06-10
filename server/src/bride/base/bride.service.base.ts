/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Bride as PrismaBride } from "@prisma/client";

export class BrideServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.BrideCountArgs, "select">): Promise<number> {
    return this.prisma.bride.count(args);
  }

  async brides<T extends Prisma.BrideFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.BrideFindManyArgs>
  ): Promise<PrismaBride[]> {
    return this.prisma.bride.findMany<Prisma.BrideFindManyArgs>(args);
  }
  async bride<T extends Prisma.BrideFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.BrideFindUniqueArgs>
  ): Promise<PrismaBride | null> {
    return this.prisma.bride.findUnique(args);
  }
  async createBride<T extends Prisma.BrideCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.BrideCreateArgs>
  ): Promise<PrismaBride> {
    return this.prisma.bride.create<T>(args);
  }
  async updateBride<T extends Prisma.BrideUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.BrideUpdateArgs>
  ): Promise<PrismaBride> {
    return this.prisma.bride.update<T>(args);
  }
  async deleteBride<T extends Prisma.BrideDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.BrideDeleteArgs>
  ): Promise<PrismaBride> {
    return this.prisma.bride.delete(args);
  }
}