import type { Schema, Struct } from '@strapi/strapi';

export interface ServiceBullet extends Struct.ComponentSchema {
  collectionName: 'components_service_bullets';
  info: {
    displayName: 'bullet';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface ServiceSection extends Struct.ComponentSchema {
  collectionName: 'components_service_sections';
  info: {
    displayName: 'section';
  };
  attributes: {
    bullet_points: Schema.Attribute.Component<'service.bullet', true>;
    section_paragraph: Schema.Attribute.RichText;
    section_title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'service.bullet': ServiceBullet;
      'service.section': ServiceSection;
    }
  }
}
