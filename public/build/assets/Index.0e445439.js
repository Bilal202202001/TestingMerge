import{B as h,J as de,aN as _e,a0 as pe,k as R,aR as fe,aS as be,r as n,o as b,l as E,w as s,f as a,q as C,ag as I,u as l,m as y,i as _,t as p,j as P,h as g,V as Ee,x as ge}from"./vendor.fd3b1727.js";import{k as Be,j as ve,e as he,g as f}from"./main.fc26c84f.js";import{_ as ye}from"./ObservatoryIcon.6d06653e.js";import{_ as Te}from"./EstimateIndexDropdown.bae761c6.js";import{_ as ke}from"./SendEstimateModal.91274455.js";import"./mail-driver.2253d638.js";const Ce=g("div",{class:"hidden w-8 h-0 mx-4 border border-gray-400 border-solid xl:block",style:{"margin-top":"1.5rem"}},null,-1),Ie={class:"relative table-container"},Se={class:"relative flex items-center justify-between h-10 mt-5 list-none border-b-2 border-gray-200 border-solid"},Ae={class:"flex text-sm font-medium cursor-pointer select-none text-primary-400"},Ve={class:"absolute items-center left-6 top-2.5 select-none"},$e={class:"relative block"},Ne={setup(De){const u=Be(),W=ve(),T=he(),k=h(null),{t:i}=de(),B=h(!1),G=h(["DRAFT","SENT","VIEWED","EXPIRED","ACCEPTED","REJECTED"]),S=h(!0),c=h("general.draft");_e();let o=pe({customer_id:"",status:"",from_date:"",to_date:"",estimate_number:""});const M=R(()=>!u.totalEstimateCount&&!S.value),A=R({get:()=>u.selectedEstimates,set:t=>{u.selectEstimate(t)}}),O=R(()=>[{key:"checkbox",thClass:"extra w-10 pr-0",sortable:!1,tdClass:"font-medium text-gray-900 pr-0"},{key:"estimate_date",label:i("estimates.date"),thClass:"extra",tdClass:"font-medium text-gray-500"},{key:"estimate_number",label:i("estimates.number",2)},{key:"name",label:i("estimates.customer")},{key:"status",label:i("estimates.status")},{key:"total",label:i("estimates.total"),tdClass:"font-medium text-gray-900"},{key:"actions",tdClass:"text-right text-sm font-medium pl-0",thClass:"text-right pl-0",sortable:!1}]);fe(o,()=>{q()},{debounce:500}),be(()=>{u.selectAllField&&u.selectAllEstimates()});function H(){return T.hasAbilities([f.CREATE_ESTIMATE,f.EDIT_ESTIMATE,f.VIEW_ESTIMATE,f.SEND_ESTIMATE])}async function J(t,r){o.status="",V()}function V(){k.value&&k.value.refresh()}async function L({page:t,filter:r,sort:d}){let $={customer_id:o.customer_id,status:o.status,from_date:o.from_date,to_date:o.to_date,estimate_number:o.estimate_number,orderByField:d.fieldName||"created_at",orderBy:d.order||"desc",page:t};S.value=!0;let m=await u.fetchEstimates($);return S.value=!1,{data:m.data.data,pagination:{totalPages:m.data.meta.last_page,currentPage:t,totalCount:m.data.meta.total,limit:10}}}function X(t){if(c.value==t.title)return!0;switch(c.value=t.title,t.title){case i("general.draft"):o.status="DRAFT";break;case i("general.sent"):o.status="SENT";break;default:o.status="";break}}function q(){u.$patch(t=>{t.selectedEstimates=[],t.selectAllField=!1}),V()}function x(){o.customer_id="",o.status="",o.from_date="",o.to_date="",o.estimate_number="",c.value=i("general.all")}function z(){B.value&&x(),B.value=!B.value}async function K(){W.openDialog({title:i("general.are_you_sure"),message:i("estimates.confirm_delete"),yesLabel:i("general.ok"),noLabel:i("general.cancel"),variant:"danger",hideNoButton:!1,size:"lg"}).then(t=>{t&&u.deleteMultipleEstimates().then(r=>{V(),r.data&&u.$patch(d=>{d.selectedEstimates=[],d.selectAllField=!1})})})}function Q(t){switch(t){case"DRAFT":c.value=i("general.draft");break;case"SENT":c.value=i("general.sent");break;case"VIEWED":c.value=i("estimates.viewed");break;case"EXPIRED":c.value=i("estimates.expired");break;case"ACCEPTED":c.value=i("estimates.accepted");break;case"REJECTED":c.value=i("estimates.rejected");break;default:c.value=i("general.all");break}}return(t,r)=>{const d=n("BaseBreadcrumbItem"),$=n("BaseBreadcrumb"),m=n("BaseIcon"),D=n("BaseButton"),N=n("router-link"),Y=n("BasePageHeader"),Z=n("BaseCustomerSelectInput"),v=n("BaseInputGroup"),ee=n("BaseMultiselect"),j=n("BaseDatePicker"),te=n("BaseInput"),ae=n("BaseFilterWrapper"),se=n("BaseEmptyPlaceholder"),w=n("BaseTab"),le=n("BaseTabGroup"),oe=n("BaseDropdownItem"),ne=n("BaseDropdown"),U=n("BaseCheckbox"),re=n("BaseText"),ie=n("BaseEstimateStatusBadge"),ue=n("BaseFormatMoney"),me=n("BaseTable"),ce=n("BasePage");return b(),E(ce,null,{default:s(()=>[a(ke),a(Y,{title:t.$t("estimates.title")},{actions:s(()=>[C(a(D,{variant:"primary-outline",onClick:z},{right:s(e=>[B.value?(b(),E(m,{key:1,name:"XIcon",class:y(e.class)},null,8,["class"])):(b(),E(m,{key:0,class:y(e.class),name:"FilterIcon"},null,8,["class"]))]),default:s(()=>[_(p(t.$t("general.filter"))+" ",1)]),_:1},512),[[I,l(u).totalEstimateCount]]),l(T).hasAbilities(l(f).CREATE_ESTIMATE)?(b(),E(N,{key:0,to:"estimates/create"},{default:s(()=>[a(D,{variant:"primary",class:"ml-4"},{left:s(e=>[a(m,{name:"PlusIcon",class:y(e.class)},null,8,["class"])]),default:s(()=>[_(" "+p(t.$t("estimates.new_estimate")),1)]),_:1})]),_:1})):P("",!0)]),default:s(()=>[a($,null,{default:s(()=>[a(d,{title:t.$t("general.home"),to:"dashboard"},null,8,["title"]),a(d,{title:t.$tc("estimates.estimate",2),to:"#",active:""},null,8,["title"])]),_:1})]),_:1},8,["title"]),C(a(ae,{"row-on-xl":!0,onClear:x},{default:s(()=>[a(v,{label:t.$tc("customers.customer",1)},{default:s(()=>[a(Z,{modelValue:l(o).customer_id,"onUpdate:modelValue":r[0]||(r[0]=e=>l(o).customer_id=e),placeholder:t.$t("customers.type_or_click"),"value-prop":"id",label:"name"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(v,{label:t.$t("estimates.status")},{default:s(()=>[a(ee,{modelValue:l(o).status,"onUpdate:modelValue":[r[1]||(r[1]=e=>l(o).status=e),Q],options:G.value,searchable:"",placeholder:t.$t("general.select_a_status"),onRemove:r[2]||(r[2]=e=>J())},null,8,["modelValue","options","placeholder"])]),_:1},8,["label"]),a(v,{label:t.$t("general.from")},{default:s(()=>[a(j,{modelValue:l(o).from_date,"onUpdate:modelValue":r[3]||(r[3]=e=>l(o).from_date=e),"calendar-button":!0,"calendar-button-icon":"calendar"},null,8,["modelValue"])]),_:1},8,["label"]),Ce,a(v,{label:t.$t("general.to")},{default:s(()=>[a(j,{modelValue:l(o).to_date,"onUpdate:modelValue":r[4]||(r[4]=e=>l(o).to_date=e),"calendar-button":!0,"calendar-button-icon":"calendar"},null,8,["modelValue"])]),_:1},8,["label"]),a(v,{label:t.$t("estimates.estimate_number")},{default:s(()=>[a(te,{modelValue:l(o).estimate_number,"onUpdate:modelValue":r[5]||(r[5]=e=>l(o).estimate_number=e)},{left:s(e=>[a(m,{name:"HashtagIcon",class:y(e.class)},null,8,["class"])]),_:1},8,["modelValue"])]),_:1},8,["label"])]),_:1},512),[[I,B.value]]),C(a(se,{title:t.$t("estimates.no_estimates"),description:t.$t("estimates.list_of_estimates")},{actions:s(()=>[l(T).hasAbilities(l(f).CREATE_ESTIMATE)?(b(),E(D,{key:0,variant:"primary-outline",onClick:r[6]||(r[6]=e=>t.$router.push("/admin/estimates/create"))},{left:s(e=>[a(m,{name:"PlusIcon",class:y(e.class)},null,8,["class"])]),default:s(()=>[_(" "+p(t.$t("estimates.add_new_estimate")),1)]),_:1})):P("",!0)]),default:s(()=>[a(ye,{class:"mt-5 mb-4"})]),_:1},8,["title","description"]),[[I,l(M)]]),C(g("div",Ie,[g("div",Se,[a(le,{class:"-mb-5",onChange:X},{default:s(()=>[a(w,{title:t.$t("general.all"),filter:""},null,8,["title"]),a(w,{title:t.$t("general.draft"),filter:"DRAFT"},null,8,["title"]),a(w,{title:t.$t("general.sent"),filter:"SENT"},null,8,["title"])]),_:1}),l(u).selectedEstimates.length&&l(T).hasAbilities(l(f).DELETE_ESTIMATE)?(b(),E(ne,{key:0,class:"absolute float-right"},{activator:s(()=>[g("span",Ae,[_(p(t.$t("general.actions"))+" ",1),a(m,{name:"ChevronDownIcon"})])]),default:s(()=>[a(oe,{onClick:K},{default:s(()=>[a(m,{name:"TrashIcon",class:"mr-3 text-gray-600"}),_(" "+p(t.$t("general.delete")),1)]),_:1})]),_:1})):P("",!0)]),a(me,{ref:(e,F)=>{F.tableComponent=e,k.value=e},data:L,columns:l(O),"placeholder-count":l(u).totalEstimateCount>=20?10:5,class:"mt-10"},Ee({header:s(()=>[g("div",Ve,[a(U,{modelValue:l(u).selectAllField,"onUpdate:modelValue":r[7]||(r[7]=e=>l(u).selectAllField=e),variant:"primary",onChange:l(u).selectAllEstimates},null,8,["modelValue","onChange"])])]),"cell-checkbox":s(({row:e})=>[g("div",$e,[a(U,{id:e.id,modelValue:l(A),"onUpdate:modelValue":r[8]||(r[8]=F=>ge(A)?A.value=F:null),value:e.data.id},null,8,["id","modelValue","value"])])]),"cell-estimate_date":s(({row:e})=>[_(p(e.data.formatted_estimate_date),1)]),"cell-estimate_number":s(({row:e})=>[a(N,{to:{path:`estimates/${e.data.id}/view`},class:"font-medium text-primary-500"},{default:s(()=>[_(p(e.data.estimate_number),1)]),_:2},1032,["to"])]),"cell-name":s(({row:e})=>[a(re,{text:e.data.customer.name,length:30},null,8,["text"])]),"cell-status":s(({row:e})=>[a(ie,{status:e.data.status,class:"px-3 py-1"},{default:s(()=>[_(p(e.data.status),1)]),_:2},1032,["status"])]),"cell-total":s(({row:e})=>[a(ue,{amount:e.data.total,currency:e.data.customer.currency},null,8,["amount","currency"])]),_:2},[H()?{name:"cell-actions",fn:s(({row:e})=>[a(Te,{row:e.data,table:k.value},null,8,["row","table"])])}:void 0]),1032,["columns","placeholder-count"])],512),[[I,!l(M)]])]),_:1})}}};export{Ne as default};