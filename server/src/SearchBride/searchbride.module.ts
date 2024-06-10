import { Module } from "@nestjs/common";
import { SearchBrideService } from "./searchbride.service";
import { SearchBrideController } from "./searchbride.controller";
import { SearchBrideResolver } from "./searchbride.resolver";

@Module({
  controllers: [SearchBrideController],
  providers: [SearchBrideService, SearchBrideResolver],
  exports: [SearchBrideService],
})
export class SearchBrideModule {}
