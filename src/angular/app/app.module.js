System.register(["@angular/core", "@angular/platform-browser", "./app.component/app.component", "./404.component/404.component", "./server.component/server.component", "./dashboard.component/dashboard.component", "@angular/forms", "@angular/router", "@angular/http"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, platform_browser_1, app_component_1, _404_component_1, server_component_1, dashboard_component_1, forms_1, router_1, http_1, appRoutes, AppModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (_404_component_1_1) {
                _404_component_1 = _404_component_1_1;
            },
            function (server_component_1_1) {
                server_component_1 = server_component_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }
        ],
        execute: function () {
            appRoutes = [
                { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
                { path: 'server', component: server_component_1.ServerComponent, data: { title: 'Server' } },
                { path: '404', component: _404_component_1.NotFoundComponent, data: { title: 'Not Found' } },
                { path: 'dashboard', component: dashboard_component_1.DashboardComponent, data: { title: 'Dash' } },
                { path: '**', redirectTo: '/404' }
            ];
            AppModule = (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = __decorate([
                core_1.NgModule({
                    imports: [
                        platform_browser_1.BrowserModule,
                        forms_1.FormsModule,
                        http_1.HttpModule,
                        http_1.JsonpModule,
                        router_1.RouterModule.forRoot(appRoutes)
                    ],
                    declarations: [
                        app_component_1.AppComponent,
                        _404_component_1.NotFoundComponent,
                        dashboard_component_1.DashboardComponent,
                        server_component_1.ServerComponent
                    ],
                    bootstrap: [app_component_1.AppComponent]
                })
            ], AppModule);
            exports_1("AppModule", AppModule);
        }
    };
});
//# sourceMappingURL=app.module.js.map