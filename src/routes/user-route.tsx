import RequireUser from "middleware/RequireUser";
import { PageDashboard, PageNewActivity, PageSettings } from "pages/index";
import { Route } from "react-router-dom";

export function userRoute() {
    return [
        <Route key='/user' path='/user' element={<RequireUser />}>
            <Route key='dashboard' path='dashboard' element={<PageDashboard />} />
            <Route key='new-activity' path='new-activity' element={<PageNewActivity />} />
            <Route key='settings' path='settings' element={<PageSettings />} />
        </Route>,
    ];
}
