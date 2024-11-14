import type { Schema, Struct } from '@strapi/strapi';

export interface CardTest extends Struct.ComponentSchema {
  collectionName: 'components_card_tests';
  info: {
    displayName: 'Test';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Heading: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'card.test': CardTest;
    }
  }
}
