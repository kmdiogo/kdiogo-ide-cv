<script setup lang="ts">
import ProjectPageLayout from "@/components/layout/ProjectPageLayout.vue";
import CppLogo from "@/assets/ext-logos/cpp-logo.png";
import CLogo from "@/assets/ext-logos/c-logo.png";
import { TechnologyItemProps } from "@/components/layout/ProjectTechnologyItem.vue";
import { IconLinkProps } from "@/components/shared/IconLink.vue";

const technologies: TechnologyItemProps[] = [
  {
    name: "C",
    description: "Filesystem in userspace (FUSE)",
    imgSrc: CLogo,
  },
  {
    name: "C++",
    description: "EXT2 Filesystem Driver",
    imgSrc: CppLogo,
  },
];

const links: IconLinkProps[] = [
  {
    href: "https://github.com/kmdiogo/vdi-fuse-cpp",
    icon: ["fab", "git-alt"],
  },
];
</script>

<template>
  <ProjectPageLayout
    title="VDI Filesystem"
    :technologies="technologies"
    :links="links"
    description="Mount a VDI file as FUSE-based filesystem for Linux"
  >
    <p>
      This program allows you to mount a Virtual Disk Image (VDI) file used by
      VirtualBox onto a Linux machine where the contents of the VDI can be
      accessed using the OS's filesystem.
    </p>
    <p>
      The filesystem was implemented using the Filesystem in USErspace (FUSE)
      software interface. As part of this project, I also implemented an ext2
      filesystem driver to parse the binary contents of VDI files with an ext2
      filesystem installed. This means that this program currently only supports
      accessing ext2 content, but drivers for other filesystems (NTFS for
      Windows, ext4 for newer Linux, etc.) could theoretically be implemented to
      add support.
    </p>
    <img
      class="rounded border border-darcula-500"
      alt="preview of VDI FUSE program"
      src="../../assets/projects/vdi-fuse.png"
    />
  </ProjectPageLayout>
</template>
