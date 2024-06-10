import * as graphql from "@nestjs/graphql";
import { SearchBrideService } from "./searchbride.service";

export class SearchBrideResolver {
  constructor(protected readonly service: SearchBrideService) {}

  @graphql.Query(() => String)
  async SearchBrides(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.SearchBrides(args);
  }

  @graphql.Query(() => String)
  async ViewBride(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.ViewBride(args);
  }
}
