const base = {
    get() {
        return {
            url : "http://localhost:8080/django1pyj28qj/",
            name: "django1pyj28qj",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于django的社区设备报修住户反馈智能预测系统设计"
        } 
    }
}
export default base
