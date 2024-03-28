/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "YARP", "index.html", [
    [ "Welcome to YARP", "index.html", "index" ],
    [ "YARP Modules", "modules.html", "modules" ],
    [ "Other Pages", "usergroup0.html", [
      [ "How to add a device to YARP", "add_a_device.html", [
        [ "What is a device driver in YARP?", "add_a_device.html#dev2-howto-intro", null ],
        [ "Step by step instructions", "add_a_device.html#dev2-howto-steps", null ]
      ] ],
      [ "Audio in YARP", "AudioDoc.html", [
        [ "yarp::sig::Sound data type", "AudioDoc.html#datatype", null ],
        [ "yarp devices", "AudioDoc.html#devices_general", null ],
        [ "Physical device drivers", "AudioDoc.html#driver_devices", null ],
        [ "wrapper devices", "AudioDoc.html#devices_wrappers", null ],
        [ "Examples", "AudioDoc.html#AudioExamples", null ],
        [ "Limitations", "AudioDoc.html#AudioLimitations", null ]
      ] ],
      [ "mpi carriers", "carrier_config_mpi.html", [
        [ "Using the MPI carriers", "carrier_config_mpi.html#carrier_config_mpi_usage", null ],
        [ "What is MPI?", "carrier_config_mpi.html#carrier_config_mpi_intro", null ],
        [ "Benefits of using MPI", "carrier_config_mpi.html#carrier_config_mpi_benefits", null ],
        [ "Sideeffects of using MPI", "carrier_config_mpi.html#carrier_config_mpi_sideeffects", null ],
        [ "Compiling YARP with MPI support", "carrier_config_mpi.html#carrier_config_mpi_compliation", null ],
        [ "Open source MPI implementations", "carrier_config_mpi.html#carrier_config_mpi_implementations", null ]
      ] ],
      [ "Using the YARP companion utility", "companion_use.html", [
        [ "YARP companion basics", "companion_use.html#companion_basics", null ],
        [ "YARP companion advanced", "companion_use.html#companion_advanced", null ]
      ] ],
      [ "YARP Dependencies", "dependencies.html", [
        [ "Required Dependencies", "dependencies.html#dependencies_required", [
          [ "The ACE Library", "dependencies.html#dependencies_ace", [
            [ "The general approach to installing ACE", "dependencies.html#dependencies_ace_install", null ],
            [ "Compiling ACE on UNIX", "dependencies.html#dependencies_ace_install_unix", null ],
            [ "Compiling ACE on Windows", "dependencies.html#ace_windows", null ]
          ] ],
          [ "Eigen", "dependencies.html#dependencies_eigen", [
            [ "Linux", "dependencies.html#dependencies_eigen_linux", null ],
            [ "macOS", "dependencies.html#dependencies_eigen_macos", null ],
            [ "Windows", "dependencies.html#dependencies_eigen_windows", null ]
          ] ]
        ] ],
        [ "GUI Dependencies", "dependencies.html#dependencies_gui", [
          [ "Qt5 (Recommended)", "dependencies.html#dependencies_qt5", [
            [ "Linux", "dependencies.html#dependencies_qt5_Linux", [
              [ "Debian/Ubuntu", "dependencies.html#dependencies_qt5_debian_ubuntu", null ],
              [ "Others", "dependencies.html#dependencies_qt5_linux_others", null ]
            ] ],
            [ "Windows", "dependencies.html#dependencies_qt5_windows", null ],
            [ "macOS", "dependencies.html#dependencies_qt5_macos", null ]
          ] ]
        ] ]
      ] ],
      [ "Device Drivers How-To", "dev-how-to.html", [
        [ "What is a device driver in YARP?", "dev-how-to.html#dev-howto-intro", null ],
        [ "Adding a device driver to YARP_dev", "dev-how-to.html#dev-howto-lib", null ],
        [ "Adding a device driver factory", "dev-how-to.html#dev-howto-factory", null ],
        [ "Getting things compiled", "dev-how-to.html#dev-howto-compile", null ],
        [ "Hey, why not automate all this?", "dev-how-to.html#dev-howto-wow", null ]
      ] ],
      [ "FrameTransform: possibile server-client configurations", "Fts_ftc_config.html", [
        [ "Description", "Fts_ftc_config.html#Fts_ftc_config_intro", null ],
        [ "fts_full_ros compatible configurations", "Fts_ftc_config.html#fts_full_ros", null ],
        [ "fts_yarp_only compatible configurations", "Fts_ftc_config.html#fts_yarp_only", null ],
        [ "Peculiar client to client configuration", "Fts_ftc_config.html#client_to_client", null ]
      ] ],
      [ "User Manual", "manual.html", [
        [ "YARP User Manual", "manual.html#manual_intro", null ]
      ] ],
      [ "User Manual Title", "manual_title.html", null ],
      [ "Software for Humanoid Robots: The YARP Approach", "note_yarp_philosophy.html", [
        [ "One processor is never enough.", "note_yarp_philosophy.html#philosophy_many", null ],
        [ "Modularity.", "note_yarp_philosophy.html#philosophy_module", null ],
        [ "Minimal interference.", "note_yarp_philosophy.html#philosophy_interfere", null ],
        [ "Stopping hurts.", "note_yarp_philosophy.html#philosophy_stopping", null ],
        [ "Humility helps.", "note_yarp_philosophy.html#philosophy_humility", null ],
        [ "Exploit diversity.", "note_yarp_philosophy.html#philosophy_diversity", null ]
      ] ],
      [ "Using port monitors for arbitrating multiple connections", "arbitration.html", [
        [ "Description", "arbitration.html#arbitration_desc", null ],
        [ "Requirements", "arbitration.html#arbitration_req", null ],
        [ "Running the example", "arbitration.html#arbitration_running", null ],
        [ "Scripts", "arbitration.html#arbitration_scripts", [
          [ "ball_monitor.lua", "arbitration.html#arbitration_ball_monitor", null ],
          [ "line_monitor.lua", "arbitration.html#arbitration_line_monitor", null ],
          [ "sel_monitor.lua", "arbitration.html#arbitration_sel_monitor", null ]
        ] ]
      ] ],
      [ "An example of using port arbitrator with time events", "arbitration_tevent.html", [
        [ "Description", "arbitration_tevent.html#arbitration_tevent_desc", null ],
        [ "Requirements", "arbitration_tevent.html#arbitration_tevent_req", null ],
        [ "Running the example", "arbitration_tevent.html#arbitration_tevent_running", null ],
        [ "Scripts", "arbitration_tevent.html#arbitration_tevent_scripts", [
          [ "ball_monitor.lua", "arbitration_tevent.html#arbitration_tevent_ball_monitor", null ],
          [ "line_monitor.lua", "arbitration_tevent.html#arbitration_tevent_line_monitor", null ]
        ] ]
      ] ],
      [ "An example of using the portmonitor object at the both sides of a connection to encode and decode data", "coder_decoder.html", [
        [ "Description", "coder_decoder.html#coder_decoder_desc", null ],
        [ "Requirements", "coder_decoder.html#coder_decoder_req", null ],
        [ "Running the example", "coder_decoder.html#coder_decoder_running", null ],
        [ "Scripts", "coder_decoder.html#coder_decoder_scripts", [
          [ "codec.lua", "coder_decoder.html#coder_decoder_codec", null ]
        ] ]
      ] ],
      [ "An example which shows how to use a Lua script to modify image data", "image_modification.html", [
        [ "Description", "image_modification.html#image_modification_desc", null ],
        [ "Requirements", "image_modification.html#image_modification_req", null ],
        [ "Running the example", "image_modification.html#image_modification_running", null ],
        [ "Scripts", "image_modification.html#image_modification_scripts", [
          [ "img_modifier.lua", "image_modification.html#image_modification_img_modifier", null ]
        ] ]
      ] ],
      [ "An example which shows how to use C++ and DLLS to modify incoming data in an input port", "simple_dll.html", [
        [ "Description", "simple_dll.html#simple_dll_desc", null ],
        [ "Requirements", "simple_dll.html#simple_dll_req", null ],
        [ "Running the example", "simple_dll.html#simple_dll_running", null ],
        [ "Code Samples", "simple_dll.html#simple_dll_sample", [
          [ "SimpleMonitorObject.h", "simple_dll.html#simple_dll_sample_h", null ],
          [ "SimpleMonitorObject.cpp", "simple_dll.html#simple_dll_sample_cpp", null ]
        ] ]
      ] ],
      [ "An example which shows how to use a Lua script to modify incoming data in an input port", "simple_modification.html", [
        [ "Description", "simple_modification.html#simple_modification_desc", null ],
        [ "Requirements", "simple_modification.html#simple_modification_req", null ],
        [ "Running the example", "simple_modification.html#simple_modification_running", null ],
        [ "Scripts", "simple_modification.html#simple_modification_scripts", [
          [ "bot_modifier.lua", "simple_modification.html#simple_modification_bot_modifier", null ]
        ] ]
      ] ],
      [ "An example which shows how to use a Lua script to create a new data type in a port", "type_modification.html", [
        [ "Description", "type_modification.html#type_modification_desc", null ],
        [ "Requirements", "type_modification.html#type_modification_req", null ],
        [ "Running the example", "type_modification.html#type_modification_running", null ],
        [ "Scripts", "type_modification.html#type_modification_scripts", [
          [ "type_modifier.lua", "type_modification.html#type_modification_type_modifier", null ]
        ] ]
      ] ],
      [ "Ominous but Enigmatic Warning", "warning.html", null ],
      [ "Configuring your external build", "yarp_external_build.html", [
        [ "Install data files inside directories specific for your project", "yarp_external_build.html#data-files-inside-specific-directories", null ]
      ] ],
      [ "YARP Logos", "yarp_logos.html", null ],
      [ "The YARP os library", "yarp_os.html", "yarp_os" ],
      [ "Deprecated List", "deprecated.html", null ],
      [ "Todo List", "todo.html", null ]
    ] ],
    [ "API Documentation", "usergroup1.html", [
      [ "Namespace List", "namespaces.html", [
        [ "Namespace List", "namespaces.html", "namespaces_dup" ],
        [ "Namespace Members", "namespacemembers.html", [
          [ "All", "namespacemembers.html", "namespacemembers_dup" ],
          [ "Functions", "namespacemembers_func.html", "namespacemembers_func" ],
          [ "Variables", "namespacemembers_vars.html", null ],
          [ "Typedefs", "namespacemembers_type.html", "namespacemembers_type" ],
          [ "Enumerations", "namespacemembers_enum.html", null ],
          [ "Enumerator", "namespacemembers_eval.html", null ]
        ] ]
      ] ],
      [ "Class List", "annotated.html", [
        [ "Class List", "annotated.html", "annotated_dup" ],
        [ "Class Index", "classes.html", null ],
        [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
        [ "Class Members", "functions.html", [
          [ "All", "functions.html", "functions_dup" ],
          [ "Functions", "functions_func.html", "functions_func" ],
          [ "Variables", "functions_vars.html", "functions_vars" ],
          [ "Typedefs", "functions_type.html", "functions_type" ],
          [ "Enumerations", "functions_enum.html", null ],
          [ "Enumerator", "functions_eval.html", null ],
          [ "Related Functions", "functions_rela.html", null ]
        ] ]
      ] ],
      [ "File List", "files.html", [
        [ "File List", "files.html", "files_dup" ],
        [ "File Members", "globals.html", [
          [ "All", "globals.html", "globals_dup" ],
          [ "Functions", "globals_func.html", "globals_func" ],
          [ "Variables", "globals_vars.html", "globals_vars" ],
          [ "Typedefs", "globals_type.html", "globals_type" ],
          [ "Enumerations", "globals_enum.html", null ],
          [ "Enumerator", "globals_eval.html", null ],
          [ "Macros", "globals_defs.html", "globals_defs" ]
        ] ]
      ] ],
      [ "Examples", "examples.html", "examples" ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"AbstractCarrier_8cpp.html",
"CameraVocabs_8h.html#aac136b9295b7ea1601712ee13475fefc",
"ControlBoardWrapperRemoteCalibrator_8cpp_source.html",
"FfmpegWriter_8cpp_source.html",
"IAmplifierControl_8h.html#a8b8f110df61beef39e108828bad1b2a7",
"IJoypadController_8h.html#a6811631defc87d6238b693db3105a1d5",
"IVirtualAnalogSensor_8h.html",
"Image_8copyPixels_8cpp.html#ae54dfb30df298f1df09d7c0cf219d99b",
"Lidar2DDeviceBase_8cpp.html#a525335710b53cb064ca56b936120431e",
"Map2D__nwc__yarp_8cpp_source.html",
"MpiStream_8h_source.html",
"NullConnectionReader_8h.html",
"PortAudioBuffer_8h.html",
"RandnScalar_8cpp.html#acfd212359dc5a809fd0f4f7195c8e3f6",
"SensorMeasurement_8cpp.html",
"TcpFace_8cpp.html#a7f75b27e1c176f60fc4986dd98356047",
"Vocab_8h.html#a976c211122df3c4d27f5fad7810dda6f",
"broker_8cpp.html",
"classAudioRecorderWrapper.html#a53e0f561b792b3b6ddc7b84b7eaf2532",
"classControlBoardRemapper.html#a5e9fa6b040212002c3c3e5b3c93503cf",
"classControlBoardWrapperImpedanceControl.html#a1673ff5ae95358faf12529cbc992f73a",
"classDrivers_1_1Private.html#a51a3b6aad48756c8e654829c50d467dc",
"classFakeBatteryService__getBatteryCurrent__helper_1_1Command.html#a3c7890a7739a21fec531262a12263534",
"classFakeBatteryService__setBatteryCurrent__helper_1_1Reply.html#a85168e5cd2752323338e280c09298d69",
"classFakeBot.html#adb7fe328c8fff05374574ceb63ef4d08",
"classFakeMotionControl.html#a31d57cab08d0aa5da496c6dfb38d535c",
"classFakeMotionControl.html#ad3a9abc287fe6eccb00dca7a31e10d38",
"classFakePositionSensor.html#a0781a8426685c6b57cfdc064e6f3aa1a",
"classFrameGrabber__nwc__yarp.html#ad32b28453170fd7d357ac68426c28861",
"classFrameTransformStorageSetRPC.html#a347a171498f2ed4d0226b4aa743eb35d",
"classH264Stream.html#aaca54c2c277be99f05f08a2592a1ef56",
"classILocalization2DMsgs__set__initial__pose1__RPC__helper_1_1Command.html#a3f92ae02bc95ad3d40da6eb503f31e95",
"classIMap2DMsgs__clear__all__maps__RPC__helper.html#a4ff46b99e68c2d64d4ca094dd0779676",
"classIMap2DMsgs__enable__maps__compression__RPC__helper.html#a9b05305ac557f7dc8b6264cda836eb36",
"classIMap2DMsgs__get__locations__list__RPC__helper_1_1Command.html#aae618df6f2a50d9e5c79f1b1cabff62d",
"classIMap2DMsgs__load__maps__collection__RPC__helper_1_1Command.html#afcef6b0f1f545a2f015d68c68d683f6e",
"classIMap2DMsgs__save__maps__collection__RPC__helper_1_1Command.html#a7362ea9131204cf98de5125be478673b",
"classINavigation2DMsgs__apply__velocity__command__RPC__helper_1_1Reply.html#a6b9f7cdda34ec3d42aa08bd295342266",
"classINavigation2DMsgs__get__relative__location__of__current__target__RPC__helper.html#ab5e4d098f13e6ef9495ba686943d33de",
"classINavigation2DMsgs__stop__navigation__RPC__helper.html#ae1b40cb9947f8edef80766ebb163b2e3",
"classLaserFromRosTopic.html",
"classLocalization2D__nws__yarp.html#a420ac3770d91ea7f6d8d9a6fe696b7d4",
"classMap2D__nwc__yarp.html#a1f33eb796f6b415cae867713ef7d7cf5",
"classMobileBaseVelocityControlRPC__getLastVelocityCommandRPC__helper_1_1Command.html#aef3c1823ff1cc2cf54344343fd950800",
"classMultiNameSpaceHelper.html#a7d12f7c326071815699681241df0fdd9",
"classNavigation2DClient.html#a892ae0701337d9dc7e2c105bad17e726",
"classNestedContact_1_1Private.html",
"classPortAudioPlayerDeviceDriver.html#ad66f3d1bda0f545480c4c5daa2169739",
"classRGBDSensorClient.html#ad823d401b605668143fd1e064411646f",
"classRangefinder2D__nws__yarp.html#a753e673cde2c3411405612d6778909fb",
"classRemoteControlBoard.html#ad6fd46ec60fdd83ee801bff7ea86bb94",
"classRpLidar2.html#a70d63b3f2b4948b3c1290d00f5d1ac14",
"classServerFrameGrabber.html#a1e8a9635cff507ecd22634d19cf5b796",
"classStubDriver.html#a2e35bbb8e3bf98d35b4bd8ad73a1da44",
"classType_1_1Private.html#a39eef1cdaeb18464cbd874e628e25c54",
"classXmlRpcCarrier.html#a4be8c57be387973e191ea30804fcc396",
"classfakeIMU.html#a7df3aa25f8e6325e23bdbce1475356c4",
"classreturn__getLastVelocityCommand.html#a2caca0325fc60d1ea793e695cebeaa3a",
"classreturn__get__path.html#aa4f2d1f84d715dd6a94d2714987a8f42",
"classyarp_1_1dev_1_1ControlBoardHelper.html#a6854c328657ced5f61e6f5d19fe3158f",
"classyarp_1_1dev_1_1ICanBus.html#a4f13ed9ba6099dfcbca1ee528979d00f",
"classyarp_1_1dev_1_1IFrameGrabberControlsDC1394.html#a998cce4dcbb8a53ecbe3208bfbe812e0",
"classyarp_1_1dev_1_1IJoypadEventDriven.html#a758235b50fe4464283a15759a74f81b0",
"classyarp_1_1dev_1_1IRGBDSensor.html#a2dbb4093664f9fc2e74521d00783edde",
"classyarp_1_1dev_1_1ImplementAmplifierControl.html#a15987ef1788e82c45626f5814abb06ec",
"classyarp_1_1dev_1_1ImplementPositionControl.html#a0d5312672d41758820d80e13d1cb4957",
"classyarp_1_1dev_1_1Nav2D_1_1IMap2D.html#a59d777e1ce484942e00e7f939dd2ac31",
"classyarp_1_1dev_1_1PolyDriver.html#a98619763ba602276ae875ff5c168d295",
"classyarp_1_1manager_1_1Application.html#a4820067c4dfebe77a081c04a8dc42902",
"classyarp_1_1manager_1_1ErrorLogger.html#afd0350e3809ad5f50722fe3d587b8b4a",
"classyarp_1_1manager_1_1LocalBroker.html#a1027855904cd73034d97e104493f2420",
"classyarp_1_1manager_1_1MultiResource.html#ae549688a7cacfc9ca2ecf7912b78f3cd",
"classyarp_1_1manager_1_1YarpBroker.html#aefb5eb8a1f6a6d1236c821c235df6149",
"classyarp_1_1os_1_1AbstractContactable.html#ac7f14ca1395e7a4f2bfd8e40a2a19aba",
"classyarp_1_1os_1_1ConnectionReader.html",
"classyarp_1_1os_1_1InputProtocol.html#aaf0e87dd8d3284599c74397ed2d20043",
"classyarp_1_1os_1_1NetType.html",
"classyarp_1_1os_1_1NullConnectionWriter.html#acfb85a1498a40df31ad40b1755f8ebac",
"classyarp_1_1os_1_1PortWriterBuffer.html#a8ce214b8cd11b9264f9efa8c915c011c",
"classyarp_1_1os_1_1ResourceFinder.html#a9322744f6143c98a377bf9831d5bae3d",
"classyarp_1_1os_1_1Stamped.html",
"classyarp_1_1os_1_1Value.html#a0bb06e41282a6f0a26ffae190239a56b",
"classyarp_1_1os_1_1idl_1_1WireWriter.html",
"classyarp_1_1os_1_1impl_1_1FakeTwoWayStream.html#aae797a6cbb771c26d9bf4c94d8bfc192",
"classyarp_1_1os_1_1impl_1_1NameserCarrier.html#a7c3745b664175ffa284970d09ea4cb94",
"classyarp_1_1os_1_1impl_1_1Protocol.html#a9e8c5e1b4b35be7573fc320756205490",
"classyarp_1_1os_1_1impl_1_1StoreList.html#a9324714c6fdb7996dae90e2ef5cd39e5",
"classyarp_1_1profiler_1_1graph_1_1Graph.html#ad47806e70e69b977363d7b6d8d3da312",
"classyarp_1_1robotinterface_1_1Param_1_1Private.html#a073b62268dbf62bdfd2602a0fdf0f7fb",
"classyarp_1_1robottestingframework_1_1jointsPosMotion_1_1Private.html#ae0c3290a47b7110ab59f24c425bbe27b",
"classyarp_1_1rosmsg_1_1geometry__msgs_1_1AccelStamped.html#a1f6352bcb277c12fcae6e8f220f54ac7",
"classyarp_1_1rosmsg_1_1geometry__msgs_1_1PoseWithCovariance.html#a2490ca9cd7ee619ecfd357dfcaf0c1b0",
"classyarp_1_1rosmsg_1_1nav__msgs_1_1GetMapReply.html#a0858e7fd1d7252929c7cda6f2ae700cb",
"classyarp_1_1rosmsg_1_1sensor__msgs_1_1CameraInfo.html#af11a2562ec856e9b276148ad7a1b4829",
"classyarp_1_1rosmsg_1_1sensor__msgs_1_1MultiDOFJointState.html",
"classyarp_1_1rosmsg_1_1sensor__msgs_1_1SetCameraInfoReply.html#a797cd688b0160b0f8df7398116d1363d",
"classyarp_1_1rosmsg_1_1std__msgs_1_1Float32.html#ae5f7684f2aa46762f4aa439185ac5e69",
"classyarp_1_1rosmsg_1_1std__msgs_1_1String.html#ab43c9be22494a496f853e2c7238ed680",
"classyarp_1_1rosmsg_1_1tf_1_1FrameGraph.html#a2b1d6eb2d65b52fc05060dfe63c2263a",
"classyarp_1_1rosmsg_1_1visualization__msgs_1_1InteractiveMarkerInit.html#a88503d17f625a167401d93df2ae36544",
"classyarp_1_1serversql_1_1impl_1_1Subscriber.html#a02f5abc382d8e839a1ea74a0380e4922",
"classyarp_1_1sig_1_1Sound.html",
"classyarp_1_1yarpLogger_1_1LogLevel.html",
"diagnostic__msgs__DiagnosticArray_8h_source.html",
"dir_e2468d873151794355de61a8e7adc54e.html",
"functions_h.html",
"globals_func_f.html",
"imuBosch__BNO055_8h.html#a0e10ff104993a164fd03c2a43cfd8648",
"libYARP__os_2src_2yarp_2os_2LogComponent_8h.html#abd0b8da6f090dba7632e3ea2cb0fa36e",
"module_8cpp_source.html",
"namespacestereo__msgs.html#ad6536f7fc800d5d5b36b736ecc074044",
"namespaceyarp_1_1manager.html#a9a13279e28f88e9c2e9c4dc10492c468",
"namespaceyarp_1_1rosmsg_1_1shape__msgs.html",
"note_devices.html",
"return__get__areas__list_8cpp_source.html",
"sensor__msgs_2Temperature_8h.html",
"std__msgs__Int8_8h.html#abf777d5cb78cb59561ff6b319f401a03",
"struct__IplImage.html#a697184a2da29652d664ae540ec36839b",
"structyarp_1_1dev_1_1RGBDSensorParamParser_1_1RGBDParam.html#a98137f6950d488f42320d0126b448100",
"structyarp_1_1sig_1_1DataXYZRGBA.html#a3ce4a04cff45d169a15b3adc74e3e5a3",
"swigluarun_8h.html#ae9c11d011d8390489595f718d7565a8a",
"v2_3_3.html#autotoc_md51",
"v2_3_72_1.html#autotoc_md281",
"v3_4_1.html#autotoc_md597",
"visualization__msgs_2InteractiveMarkerPose_8h.html",
"yarp_2rosmsg_2geometry__msgs_2TwistWithCovarianceStamped_8h.html#abc1adebd511a15b017f46ad6188a2597",
"yarp_2rosmsg_2tf2__msgs_2TFMessage_8h_source.html",
"yarp_logging.html#autotoc_md928",
"yarpmanager-console.html#yarpmanager-console_intro"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';