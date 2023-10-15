import router from "@/router/index.ts";

router.beforeEach(async (to, _) => {
    document.title = to.meta?.title as string ?? '测试'
})