<template>
  <sidebar-menu :menu="menu" />
  <router-view />
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      menu: [
        {
          header: "Main Navigation",
          hiddenOnCollapse: true,
        },
        {
          href: "/",
          title: "Dashboard",
          icon: "fa fa-user",
        },
        {
          href: "/charts",
          title: "Charts",
          icon: "fa fa-chart-area",
          child: [
            {
              href: "/charts/sublink",
              title: "Sub Link",
            },
          ],
        },
      ],
    };
  },
};
</script>
