import { ResourceEnum } from "@lib/enums/resource.enum";
import { ResourceProps } from "@refinedev/core";
import { generateParentChild } from "@client/util/ant/resources/generate-parent-child";

const createDocumentTemplateResource = (child: ResourceEnum) =>
  generateParentChild(ResourceEnum.documentTemplate, child);

export const documentTemplateResources: Partial<
  Record<ResourceEnum, ResourceProps>
> = {
  [ResourceEnum.documentTemplateChapterTemplate]:
    createDocumentTemplateResource(ResourceEnum.chapterTemplate),
  [ResourceEnum.chapterTemplate]: createDocumentTemplateResource(
    ResourceEnum.chapterTemplate
  ),
};
