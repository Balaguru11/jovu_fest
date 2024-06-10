import * as graphql from "@nestjs/graphql";
import { SearchGroomService } from "./searchgroom.service";

export class SearchGroomResolver {
  constructor(protected readonly service: SearchGroomService) {}
}
