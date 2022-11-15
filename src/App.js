import Home from './pages/home/Home';
import JobDetail from './pages/jobDetail/JobDetail';
import List from './pages/list/List';
import Single from './pages/single/Single';
import New from './pages/new/New';

import { Routes, Route } from 'react-router-dom';
import LayoutAdmin from './layout/LayoutAdmin';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/">
                    <Route
                        index
                        element={
                            <LayoutAdmin>
                                <Home />
                            </LayoutAdmin>
                        }
                    />
                    <Route path="/jobdetail">
                        <Route
                            index
                            element={
                                <LayoutAdmin>
                                    <JobDetail />
                                </LayoutAdmin>
                            }
                        />
                    </Route>

                    <Route path="/users">
                        <Route
                            index
                            element={
                                <LayoutAdmin>
                                    <List />
                                </LayoutAdmin>
                            }
                        />
                        <Route path=":userId" element={<Single />} />
                        <Route path="new" element={<New />} />
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
