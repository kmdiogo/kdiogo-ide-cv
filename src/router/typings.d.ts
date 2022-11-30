import "vue-router";

declare module "vue-router" {
  /**
   * Extended version of a vue route record that adds metadata that can be used
   * to transform to route record into a valid file tree node
   */
  interface RouteMeta {
    label: string;
    icon: string | string[];
    iconColor?: string;
  }
}
