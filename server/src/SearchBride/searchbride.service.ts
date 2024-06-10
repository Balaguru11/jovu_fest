import { Injectable } from "@nestjs/common";

@Injectable()
export class SearchBrideService {
  constructor() {}
  async SearchBrides(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async ViewBride(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
