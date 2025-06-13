import "vue-router";
import type { IconDefinition } from "@fortawesome/free-regular-svg-icons";

declare module "vue-router" {
  /**
   * Extended version of a vue route record that adds metadata that can be used
   * to transform to route record into a valid file tree node
   */
  interface RouteMeta {
    label: string;
    icon: IconDefinition;
    iconColor?: string;
  }
}
