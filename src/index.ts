/* eslint-disable @typescript-eslint/naming-convention */
import "../theme/default.scss";
import { toLowerCase } from "@joker.front/shared";
import { registerGlobalComponent } from "@joker.front/core";

import Button from "../packages/button/index.joker";
import ButtonGroup from "../packages/button/button-group.joker";
import Icon from "../packages/icon/index.joker";
import Col from "../packages/layout/col.joker";
import Row from "../packages/layout/row.joker";
import Cell from "../packages/cell/index.joker";
import CellGroup from "../packages/cell/group.joker";
import Link from "../packages/link/index.joker";
import Radio from "../packages/radio/radio.joker";
import RadioGroup from "../packages/radio/raido-group.joker";
import RadioButton from "../packages/radio/radio-button.joker";
import Checkbox from "../packages/checkbox/checkbox.joker";
import CheckboxGroup from "../packages/checkbox/checkbox-group.joker";
import CheckboxButton from "../packages/checkbox/checkbox-button.joker";
import Input from "../packages/input/index.joker";
import Textarea from "../packages/textarea/index.joker";
import Number from "../packages/number/index.joker";
import ColorPicker from "../packages/color-picker/index.joker";
import Switch from "../packages/switch/index.joker";
import Select from "../packages/select/index.joker";
import ActionSheet from "../packages/action-sheet/index.joker";
import Tooltip from "../packages/tooltip/index.joker";
import Scrollbar from "../packages/scrollbar/index.joker";
import Tag from "../packages/tag/index.joker";
import Alert from "../packages/alert/index.joker";
import Swipe from "../packages/swipe/index.joker";
import SwipeItem from "../packages/swipe/item.joker";
import Progress from "../packages/progress/index.joker";
import Badge from "../packages/badge/index.joker";
import Avatar from "../packages/avatar/index.joker";
import Slider from "../packages/slider/index.joker";
import Divider from "../packages/divider/index.joker";
import Rate from "../packages/rate/index.joker";
import Loading from "../packages/loading/index.joker";
import Skeleton from "../packages/skeleton/index.joker";
import SkeletonItem from "../packages/skeleton/item.joker";
import ImgPlaceholder from "../packages/skeleton/img-placeholder.joker";
import Empty from "../packages/empty/index.joker";
import ImgEmpty from "../packages/empty/img-empty.joker";
import Result from "../packages/result/index.joker";
import Dialog from "../packages/dialog/index.joker";
import Popover from "../packages/popover/index.joker";
import Popconfirm from "../packages/popconfirm/index.joker";

import Cascader from "../packages/cascader/index.joker";
import Timeline from "../packages/timeline/index.joker";
import TimelineItem from "../packages/timeline/timeline-item.joker";
import Steps from "../packages/steps/index.joker";
import Step from "../packages/steps/step.joker";
import Backtop from "../packages/backtop/index.joker";
import TimePicker from "../packages/date-picker/picker/time.joker";
import TimeSelect from "../packages/date-picker/picker/time-select.joker";
import JokerDate from "../packages/date-picker/index.joker";
import DatePicker from "../packages/date-picker/picker/date.joker";
import Pagination from "../packages/pagination/index.joker";
import Tree from "../packages/tree/index.joker";
import Table from "../packages/table/index.joker";
import TableColumn from "../packages/table/column.joker";
import Collapse from "../packages/collapse/index.joker";
import CollapseItem from "../packages/collapse/collapse-item.joker";
import Image from "../packages/image/index.joker";
import Form from "../packages/form/index.joker";
import Field from "../packages/form/field.joker";
import Password from "../packages/password/index.joker";
import Drawer from "../packages/drawer/index.joker";
import Dropdown from "../packages/dropdown/index.joker";
import DropdownMenu from "../packages/dropdown/menu.joker";
import DropdownItem from "../packages/dropdown/item.joker";
import UploadBtn from "../packages/upload-btn/index.joker";
import Tabs from "../packages/tabs/index.joker";
import TabPanel from "../packages/tabs/panel.joker";
import Picker from "../packages/picker/index.joker";
import Calendar from "../packages/calendar/index.joker";
import CalendarPicker from "../packages/calendar/picker.joker";
import UploadImg from "../packages/upload-img/index.joker";
import FilterMenu from "../packages/filter-menu/index.joker";
import FilterItem from "../packages/filter-menu/item.joker";
import FloatingBubble from "../packages/floating-bubble/index.joker";
import ShareSheet from "../packages/share-sheet/index.joker";
import Grid from "../packages/grid/index.joker";
import GridItem from "../packages/grid/item.joker";
import IndexBar from "../packages/index-bar/index.joker";
import IndexPanel from "../packages/index-bar/panel.joker";
import NavBar from "../packages/nav-bar/index.joker";
import Tabbar from "../packages/tabbar/index.joker";
import TabbarItem from "../packages/tabbar/item.joker";
import LoadMore from "../packages/load-more/index.joker";

export * from "../packages/form/validate";
export { registerFormCtrl } from "../packages/form/form-ctrl";
export * from "../packages/utils/popper";
export * from "../packages/utils/zindex";
export { Loading } from "../packages/loading/index";
export { Message } from "../packages/message/index";
export { MessageBox } from "../packages/message-box/index";
export { Notification } from "../packages/notification/index";

export * from "../packages/tree/store/node";
export * from "../packages/tree/store/index";
export * from "../packages/utils/resize-event";
export { Node as CascaderNode, Store as CascaderStore } from "../packages/cascader/store";
export * from "../packages/calendar/type";
export { setLang } from "../packages/utils/lang";

let components = {
    Button,
    ButtonGroup,
    Icon,
    Col,
    Row,
    Link,
    Radio,
    RadioButton,
    RadioGroup,
    Checkbox,
    CheckboxGroup,
    Input,
    Number,
    Textarea,
    Password,
    CheckboxButton,
    ColorPicker,
    Switch,
    Select,
    Tooltip,
    Scrollbar,
    Tag,
    Alert,
    Swipe,
    SwipeItem,
    Progress,
    Badge,
    Avatar,
    Slider,
    Divider,
    Rate,
    Loading,
    Skeleton,
    SkeletonItem,
    ImgPlaceholder,
    Empty,
    ImgEmpty,
    Result,
    Dialog,
    Popover,
    Popconfirm,
    Cascader,
    Timeline,
    TimelineItem,
    Steps,
    Step,
    Backtop,
    TimePicker,
    TimeSelect,
    Date: JokerDate,
    Pagination,
    Tree,
    Table,
    TableColumn,
    Collapse,
    CollapseItem,
    Image,
    Form,
    Field,
    Drawer,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    UploadBtn,
    Tabs,
    TabPanel,
    Picker,
    DatePicker,
    Cell,
    CellGroup,
    Calendar,
    CalendarPicker,
    UploadImg,
    ActionSheet,
    FilterMenu,
    FilterItem,
    FloatingBubble,
    ShareSheet,
    Grid,
    GridItem,
    IndexBar,
    IndexPanel,
    NavBar,
    Tabbar,
    TabbarItem,
    LoadMore
};

for (let name in components) {
    let realName = `jk-${toLowerCase(name)}`;
    registerGlobalComponent({
        [realName]: components[name]
    });
}
