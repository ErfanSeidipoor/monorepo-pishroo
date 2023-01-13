import { merge } from "lodash";

import Accordion from "./Accordion";
import Alert from "./Alert";
import Autocomplete from "./Autocomplete";
import Avatar from "./Avatar";
import Backdrop from "./Backdrop";
import Badge from "./Badge";
import Breadcrumbs from "./Breadcrumbs";
import Button from "./Button";
import ButtonGroup from "./ButtonGroup";
import Card from "./Card";
import Checkbox from "./Checkbox";
import Chip from "./Chip";
import Container from "./Container";
import ControlLabel from "./ControlLabel";
import DataGrid from "./DataGrid";
import Dialog from "./Dialog";
import Drawer from "./Drawer";
import Fab from "./Fab";
import Grid from "./Grid";
import IconButton from "./IconButton";
import Input from "./Input";
import Link from "./Link";
import Lists from "./Lists";
import LoadingButton from "./LoadingButton";
import Menu from "./Menu";
import Pagination from "./Pagination";
import Paper from "./Paper";
import Pickers from "./Pickers";
import Popover from "./Popover";
import Progress from "./Progress";
import Radio from "./Radio";
import Rating from "./Rating";
import Select from "./Select";
import Skeleton from "./Skeleton";
import Slider from "./Slider";
import Snackbar from "./Snackbar";
import Stepper from "./Stepper";
import SvgIcon from "./SvgIcon";
import Switch from "./Switch";
import Table from "./Table";
import Tabs from "./Tabs";
import Timeline from "./Timeline";
import ToggleButton from "./ToggleButton";
import Tooltip from "./Tooltip";
import TreeView from "./TreeView";
import Typography from "./Typography";

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme: any) {
  return merge(
    Fab(theme),
    Tabs(theme),
    Chip(theme),
    Card(theme),
    Menu(theme),
    Grid(),
    Link(),
    Input(theme),
    Radio(theme),
    Badge(),
    Lists(theme),
    Table(theme),
    Paper(theme),
    Alert(theme),
    Switch(theme),
    Select(),
    Button(theme),
    Rating(theme),
    Dialog(theme),
    Avatar(theme),
    Slider(theme),
    Drawer(theme),
    Pickers(),
    Stepper(theme),
    Tooltip(theme),
    Popover(theme),
    SvgIcon(),
    Checkbox(theme),
    DataGrid(theme),
    Skeleton(theme),
    Timeline(theme),
    TreeView(theme),
    Backdrop(theme),
    Snackbar(),
    Progress(theme),
    Container(),
    Accordion(theme),
    IconButton(),
    Typography(theme),
    Pagination(theme),
    ButtonGroup(theme),
    Breadcrumbs(theme),
    Autocomplete(theme),
    ControlLabel(theme),
    ToggleButton(theme),
    LoadingButton()
  );
}
