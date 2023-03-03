import React, {useState} from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import LoadingBar from 'react-top-loading-bar';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
export default function App () {
  const pageSize = 10
  const apikey = 'ea82561010ba4b4cba2af723384cee02'
  const [progress, setProgress] = useState(0)
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
          color='#f11946'
          progress={progress}
          />
          <Routes>
            <Route exact path='/' element={<News setProgress={setProgress} apikey={apikey} pageSize={pageSize} category="general" key="general" />}></Route>
            <Route exact path='/business' element={<News setProgress={setProgress} apikey={apikey} pageSize={pageSize} category="business" key="business" />}></Route>
            <Route exact path='/entertainment' element={<News setProgress={setProgress} apikey={apikey} pageSize={pageSize} category="entertainment" key="entertainment" />}></Route>
            <Route exact path='/health' element={<News setProgress={setProgress} apikey={apikey} pageSize={pageSize} category="health" key="health" />}></Route>
            <Route exact path='/science' element={<News setProgress={setProgress} apikey={apikey} pageSize={pageSize} category="science" key="science" />}></Route>
            <Route exact path='/sports' element={<News setProgress={setProgress} apikey={apikey} pageSize={pageSize} category="sports" key="sports" />}></Route>
            <Route exact path='/technology' element={<News setProgress={setProgress} apikey={apikey} pageSize={pageSize} category="technology" key="technology" />}></Route>

            <Route exact path='/India' element={<News setProgress={setProgress} apikey={apikey} pageSize={pageSize} country="in" key="in" />}></Route>
            <Route exact path='/UnitedState' element={<News setProgress={setProgress} apikey={apikey} pageSize={pageSize} country="us" key="us" />}></Route>
            <Route exact path='/China' element={<News setProgress={setProgress} apikey={apikey} pageSize={pageSize} country="cn" key="cn" />}></Route>
            <Route exact path='/Canada' element={<News setProgress={setProgress} apikey={apikey} pageSize={pageSize} country="ca" key="ca" />}></Route>
            <Route exact path='/China' element={<News setProgress={setProgress} apikey={apikey} pageSize={pageSize} country="cn" key="cn" />}></Route>
            <Route exact path='/Czech Republic' element={<News setProgress={setProgress} apikey={apikey} pageSize={pageSize} country="cz" key="cz" />}></Route>
            <Route exact path='/Germany' element={<News setProgress={setProgress} apikey={apikey} pageSize={pageSize} country="de" key="de" />}></Route>
            <Route exact path='/Egypt' element={<News setProgress={setProgress} apikey={apikey} pageSize={pageSize} country="eg" key="eg" />}></Route>
            <Route exact path='/France' element={<News setProgress={setProgress} apikey={apikey} pageSize={pageSize} country="fr" key="fr" />}></Route>
            <Route exact path='/United Kingdom' element={<News setProgress={setProgress} apikey={apikey} pageSize={pageSize} country="gb" key="gb" />}></Route>
            <Route exact path='/Hong Kong' element={<News setProgress={setProgress} apikey={apikey} pageSize={pageSize} country="hk" key="hk" />}></Route>
            <Route exact path='/Hungary' element={<News setProgress={setProgress} apikey={apikey} pageSize={pageSize} country="hu" key="hu" />}></Route>
            <Route exact path='/Indonesia' element={<News setProgress={setProgress} apikey={apikey} pageSize={pageSize} country="id" key="id" />}></Route>
            <Route exact path='/Ireland' element={<News setProgress={setProgress} apikey={apikey} pageSize={pageSize} country="ie" key="ie" />}></Route>
            <Route exact path='/India' element={<News setProgress={setProgress} apikey={apikey} pageSize={pageSize} country="in" key="in" />}></Route>
            <Route exact path='/Italy' element={<News setProgress={setProgress} apikey={apikey} pageSize={pageSize} country="it" key="it" />}></Route>
            <Route exact path='/Japan' element={<News setProgress={setProgress} apikey={apikey} pageSize={pageSize} country="jp" key="jp" />}></Route>
            <Route exact path='/South Korea' element={<News setProgress={setProgress} apikey={apikey} pageSize={pageSize} country="kr" key="kr" />}></Route>
            <Route exact path='/Lithuania' element={<News setProgress={setProgress} apikey={apikey} pageSize={pageSize} country="lt" key="lt" />}></Route>
            <Route exact path='/Latvia' element={<News setProgress={setProgress} apikey={apikey} pageSize={pageSize} country="lv" key="lv" />}></Route>
            <Route exact path='/Mexico' element={<News setProgress={setProgress} apikey={apikey} pageSize={pageSize} country="mx" key="mx" />}></Route>
            <Route exact path='/Malaysia' element={<News setProgress={setProgress} apikey={apikey} pageSize={pageSize} country="my" key="my" />}></Route>
            <Route exact path='/Nigeria' element={<News setProgress={setProgress} apikey={apikey} pageSize={pageSize} country="ng" key="ng" />}></Route>
            <Route exact path='/Netherlands' element={<News setProgress={setProgress} apikey={apikey} pageSize={pageSize} country="nl" key="nl" />}></Route>
            <Route exact path='/Norway' element={<News setProgress={setProgress} apikey={apikey} pageSize={pageSize} country="no" key="no" />}></Route>
            <Route exact path='/New Zealand' element={<News setProgress={setProgress} apikey={apikey} pageSize={pageSize} country="nz" key="nz" />}></Route>
            <Route exact path='/Philippines' element={<News setProgress={setProgress} apikey={apikey} pageSize={pageSize} country="ph" key="ph" />}></Route>
            <Route exact path='/Poland' element={<News setProgress={setProgress} apikey={apikey} pageSize={pageSize} country="pl" key="pl" />}></Route>
            <Route exact path='/Portugal' element={<News setProgress={setProgress} apikey={apikey} pageSize={pageSize} country="pt" key="pt" />}></Route>
            <Route exact path='/Romania' element={<News setProgress={setProgress} apikey={apikey} pageSize={pageSize} country="ro" key="ro" />}></Route>
            <Route exact path='/Serbia' element={<News setProgress={setProgress} apikey={apikey} pageSize={pageSize} country="rs" key="rs" />}></Route>
            <Route exact path='/Russia' element={<News setProgress={setProgress} apikey={apikey} pageSize={pageSize} country="ru" key="ru" />}></Route>
            <Route exact path='/Saudi Arabia' element={<News setProgress={setProgress} apikey={apikey} pageSize={pageSize} country="sa" key="sa" />}></Route>
            <Route exact path='/Sweden' element={<News setProgress={setProgress} apikey={apikey} pageSize={pageSize} country="se" key="se" />}></Route>
            <Route exact path='/Singapore' element={<News setProgress={setProgress} apikey={apikey} pageSize={pageSize} country="sg" key="sg" />}></Route>
            <Route exact path='/Thailand' element={<News setProgress={setProgress} apikey={apikey} pageSize={pageSize} country="th" key="th" />}></Route>
            <Route exact path='/Turkey' element={<News setProgress={setProgress} apikey={apikey} pageSize={pageSize} country="tr" key="tr" />}></Route>
            <Route exact path='/Taiwan' element={<News setProgress={setProgress} apikey={apikey} pageSize={pageSize} country="tw" key="tw" />}></Route>
            <Route exact path='/Ukraine' element={<News setProgress={setProgress} apikey={apikey} pageSize={pageSize} country="ua" key="ua" />}></Route>
            <Route exact path='/United States' element={<News setProgress={setProgress} apikey={apikey} pageSize={pageSize} country="us" key="us" />}></Route>
            <Route exact path='/Uzbekistan' element={<News setProgress={setProgress} apikey={apikey} pageSize={pageSize} country="uz" key="uz" />}></Route>
            <Route exact path='/Venezuela' element={<News setProgress={setProgress} apikey={apikey} pageSize={pageSize} country="ve" key="ve" />}></Route>
            <Route exact path='/South Africa' element={<News setProgress={setProgress} apikey={apikey} pageSize={pageSize} country="za" key="za" />}></Route>
          </Routes>
        </Router>
      </div>
    )
  }