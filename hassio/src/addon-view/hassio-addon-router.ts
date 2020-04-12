import "@polymer/app-route/app-route";
import { property, customElement } from "lit-element";

import {
  HassRouterPage,
  RouterOptions,
} from "../../../src/layouts/hass-router-page";
import { HomeAssistant, Route } from "../../../src/types";
import { HassioAddonDetails } from "../../../src/data/hassio/addon";
import { PageNavigation } from "../../../src/layouts/hass-tabs-subpage";

@customElement("hassio-addon-router")
class HaAddonRouter extends HassRouterPage {
  @property() public hass!: HomeAssistant;
  @property() public addon!: HassioAddonDetails;
  @property() public narrow!: boolean;
  @property() public isWide!: boolean;
  @property() public showAdvanced!: boolean;
  @property() public route!: Route;
  @property() public sections!: PageNavigation[];

  protected routerOptions: RouterOptions = {
    defaultPage: "info",
    preloadAll: true,
    showLoading: true,
    routes: {
      info: {
        tag: "hassio-addon-info",
        load: () =>
          import(
            /* webpackChunkName: "hassio-addon-info" */ "./hassio-addon-info"
          ),
      },
      docs: {
        tag: "hassio-addon-docs",
        load: () =>
          import(
            /* webpackChunkName: "hassio-addon-docs" */ "./hassio-addon-docs"
          ),
      },
      config: {
        tag: "hassio-addon-config",
        load: () =>
          import(
            /* webpackChunkName: "hassio-addon-config" */ "./hassio-addon-config"
          ),
      },
      audio: {
        tag: "hassio-addon-audio",
        load: () =>
          import(
            /* webpackChunkName: "hassio-addon-audio" */ "./hassio-addon-audio"
          ),
      },
      network: {
        tag: "hassio-addon-network",
        load: () =>
          import(
            /* webpackChunkName: "hassio-addon-network" */ "./hassio-addon-network"
          ),
      },
      logs: {
        tag: "hassio-addon-logs",
        load: () =>
          import(
            /* webpackChunkName: "hassio-addon-logs" */ "./hassio-addon-logs"
          ),
      },
    },
  };

  protected updatePageEl(pageEl) {
    pageEl.hass = this.hass;
    pageEl.addon = this.addon;
    pageEl.narrow = this.narrow;
    pageEl.isWide = this.isWide;
    pageEl.showAdvanced = this.showAdvanced;
    pageEl.route = this.routeTail;
    pageEl.sections = this.sections;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "hassio-addon-router": HaAddonRouter;
  }
}
