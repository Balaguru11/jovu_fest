import { Module } from "@nestjs/common";
import { SearchGroomService } from "./searchgroom.service";
import { SearchGroomController } from "./searchgroom.controller";
import { SearchGroomResolver } from "./searchgroom.resolver";

@Module({
  controllers: [SearchGroomController],
  providers: [SearchGroomService, SearchGroomResolver],
  exports: [SearchGroomService],
})
export class SearchGroomModule {}
