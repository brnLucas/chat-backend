import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";
import { HttpService } from "@nestjs/axios";
import { Logger } from "@nestjs/common";

@Controller("/api/social_apps")
export class AppController {
  constructor(
    private readonly appService: AppService,
    private logger: Logger,
  ) {}

  @Get("/facebook")
  getFacebook(): string {
    this.logger.log("Facebook Endpoint");
    return "<h1>Facebook Endpoint</h1>";
  }

  @Get("/instagram")
  getInstagram(): string {
    this.logger.log("Instagram Endpoint");
    return "<h1>Instagram Endpoint</h1>";
  }
}
