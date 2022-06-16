function AChina({
    x,
    y,
    country,
    onClick,
    onMouseEnter,
    onMouseExit,
    selectedCountry,
    hoveredCountry
    // parameters/methods
}) {

    return (

        <svg xmlns="http://www.w3.org/2000/svg"
             width="650px"
            viewBox="-50 -400 2500 2000"
           
        >
  <path onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseExit} className="shape" fill={selectedCountry === country ? "red" : "gray"} stroke={hoveredCountry === country ? "red" : "black"} id="Ancient Europe"
        
        d="M 1448.00,14.00
        C 1448.00,14.00 1451.00,14.00 1451.00,14.00
          1451.00,18.91 1449.61,30.68 1447.95,35.00
          1447.95,35.00 1441.99,47.00 1441.99,47.00
          1441.99,47.00 1433.29,80.00 1433.29,80.00
          1431.50,85.02 1429.53,86.88 1427.52,91.00
          1424.77,96.61 1425.43,99.16 1424.05,101.41
          1421.82,105.04 1411.14,110.58 1407.00,111.77
          1404.51,112.12 1401.57,112.00 1399.00,111.77
          1396.55,119.99 1390.42,120.25 1386.89,125.37
          1385.50,127.39 1385.68,128.80 1383.52,131.42
          1383.52,131.42 1368.82,146.21 1368.82,146.21
          1364.51,151.77 1362.98,157.23 1355.70,160.64
          1349.00,163.79 1342.19,163.00 1335.00,163.00
          1335.00,163.00 1320.00,163.00 1320.00,163.00
          1320.00,163.00 1309.00,163.96 1309.00,163.96
          1300.06,164.31 1297.94,162.02 1293.91,161.26
          1289.95,160.51 1290.02,161.47 1285.00,159.58
          1281.30,158.18 1276.22,154.24 1272.96,154.59
          1266.00,155.32 1254.12,163.37 1248.94,168.08
          1246.07,170.69 1243.77,174.01 1240.35,175.95
          1236.16,178.32 1230.68,178.05 1226.00,178.00
          1226.00,178.00 1215.00,177.22 1215.00,177.22
          1212.88,177.41 1210.94,178.12 1209.04,179.04
          1202.17,182.38 1203.68,184.73 1202.17,190.91
          1202.17,190.91 1200.00,198.00 1200.00,198.00
          1192.93,200.02 1190.85,207.59 1186.87,213.26
          1186.87,213.26 1180.85,223.71 1180.85,223.71
          1178.14,227.85 1176.79,227.45 1174.30,233.04
          1170.65,241.24 1173.02,241.29 1170.98,246.39
          1166.83,256.72 1163.07,258.07 1154.43,263.11
          1152.23,264.39 1150.43,265.95 1147.91,266.59
          1145.91,267.10 1142.16,267.02 1140.00,267.09
          1131.96,266.91 1120.65,264.29 1113.00,267.09
          1110.53,268.13 1103.39,272.88 1101.54,274.68
          1099.65,276.50 1099.50,278.17 1096.86,279.57
          1093.96,281.11 1089.24,280.99 1086.00,281.00
          1086.00,281.00 1058.00,281.00 1058.00,281.00
          1050.92,281.05 1052.44,281.84 1047.00,282.74
          1047.00,282.74 1040.00,283.47 1040.00,283.47
          1040.00,283.47 1025.00,288.88 1025.00,288.88
          1016.10,293.36 1022.09,292.25 1010.00,296.00
          1010.00,296.00 1019.17,299.54 1019.17,299.54
          1023.07,300.67 1027.06,300.35 1030.99,302.27
          1035.28,304.37 1039.43,309.11 1046.00,311.24
          1053.40,313.63 1060.30,310.16 1067.95,316.74
          1070.67,319.08 1075.11,326.69 1076.01,330.17
          1076.01,330.17 1076.01,340.00 1076.01,340.00
          1077.69,347.84 1083.78,350.24 1091.00,349.96
          1091.00,349.96 1105.83,348.53 1105.83,348.53
          1110.37,347.34 1112.48,344.55 1116.18,342.70
          1116.18,342.70 1124.72,339.08 1124.72,339.08
          1124.72,339.08 1147.00,323.70 1147.00,323.70
          1147.00,323.70 1155.25,318.33 1155.25,318.33
          1160.74,314.23 1169.06,307.76 1175.42,305.69
          1175.42,305.69 1183.71,304.25 1183.71,304.25
          1188.16,302.76 1190.74,299.47 1195.96,300.24
          1199.94,300.82 1201.04,303.12 1203.57,305.72
          1207.94,310.22 1212.60,312.64 1211.88,319.92
          1211.58,322.90 1207.49,337.06 1206.05,339.84
          1202.94,345.82 1189.39,361.78 1183.82,366.18
          1179.92,369.27 1175.46,370.44 1168.90,376.46
          1161.62,383.16 1154.62,394.33 1144.00,396.00
          1142.43,400.60 1139.99,400.60 1136.09,403.09
          1136.09,403.09 1128.91,408.16 1128.91,408.16
          1125.67,409.49 1115.05,409.00 1111.00,409.00
          1111.00,409.00 1117.16,418.00 1117.16,418.00
          1121.08,424.69 1125.81,435.76 1134.00,438.00
          1135.33,454.19 1149.22,461.93 1160.83,470.94
          1170.56,478.48 1171.45,484.46 1176.37,489.87
          1180.79,494.72 1185.72,499.01 1190.92,502.99
          1193.46,504.94 1197.51,507.30 1198.98,510.05
          1200.52,512.95 1200.06,523.28 1200.00,527.00
          1199.81,538.11 1195.16,533.39 1195.00,545.00
          1194.91,552.13 1195.02,560.33 1198.71,566.68
          1204.77,577.08 1211.98,574.59 1211.77,589.00
          1212.01,592.57 1212.25,600.97 1211.77,604.00
          1211.77,604.00 1205.25,623.09 1205.25,623.09
          1205.25,623.09 1203.25,632.00 1203.25,632.00
          1203.25,632.00 1201.85,641.83 1201.85,641.83
          1199.98,649.30 1194.12,663.49 1189.00,669.00
          1192.41,673.78 1191.00,685.89 1191.00,692.00
          1191.00,692.00 1191.00,704.00 1191.00,704.00
          1190.98,713.91 1188.87,715.11 1184.03,723.17
          1182.00,726.56 1181.94,727.54 1178.91,730.56
          1178.91,730.56 1169.21,738.61 1169.21,738.61
          1169.21,738.61 1152.53,757.40 1152.53,757.40
          1152.53,757.40 1144.42,762.19 1144.42,762.19
          1138.27,766.28 1136.25,768.78 1131.49,774.17
          1129.56,776.35 1127.49,778.46 1125.91,780.91
          1125.91,780.91 1121.43,789.92 1121.43,789.92
          1119.42,793.51 1109.36,805.02 1105.68,806.80
          1102.02,808.57 1096.99,807.78 1093.00,808.05
          1093.00,808.05 1081.09,810.26 1081.09,810.26
          1081.09,810.26 1075.83,811.76 1075.83,811.76
          1070.05,812.79 1069.67,811.34 1062.21,815.44
          1062.21,815.44 1049.83,823.47 1049.83,823.47
          1044.91,825.62 1039.38,825.72 1035.09,829.26
          1035.09,829.26 1023.88,839.13 1023.88,839.13
          1023.88,839.13 1014.83,850.54 1014.83,850.54
          1014.83,850.54 999.77,863.37 999.77,863.37
          999.77,863.37 990.20,883.53 990.20,883.53
          987.98,886.44 971.39,897.55 967.83,899.20
          967.83,899.20 959.17,902.31 959.17,902.31
          954.35,904.31 951.96,907.52 945.00,907.95
          938.68,908.34 937.77,906.66 933.00,905.94
          933.00,905.94 919.00,905.94 919.00,905.94
          915.32,905.14 913.38,903.66 909.04,904.13
          905.45,904.53 897.32,909.30 896.78,913.09
          896.44,915.46 898.63,917.37 899.58,920.29
          901.66,926.66 902.99,931.21 903.00,938.00
          903.00,938.00 903.00,954.00 903.00,954.00
          903.00,954.00 902.00,969.00 902.00,969.00
          902.00,969.00 902.00,990.00 902.00,990.00
          901.86,998.16 896.28,1007.95 887.04,1002.49
          880.49,998.63 878.46,989.00 873.24,982.76
          869.83,978.68 866.01,977.51 862.28,974.55
          862.28,974.55 852.63,965.68 852.63,965.68
          852.63,965.68 840.00,960.00 840.00,960.00
          840.00,960.00 840.00,938.00 840.00,938.00
          840.00,938.00 836.24,920.83 836.24,920.83
          836.24,920.83 835.00,909.00 835.00,909.00
          833.63,913.07 832.60,914.04 829.97,917.30
          827.96,919.78 826.48,922.20 823.99,924.25
          818.93,928.40 812.80,930.37 806.28,928.56
          806.28,928.56 799.00,925.24 799.00,925.24
          796.52,924.84 792.64,925.00 790.00,925.24
          784.76,924.99 779.04,924.24 774.17,922.15
          770.98,920.78 768.43,917.68 763.83,916.23
          760.95,915.71 753.41,916.04 750.00,916.23
          741.22,915.88 740.91,912.92 733.96,909.75
          733.96,909.75 725.00,907.18 725.00,907.18
          721.29,905.72 712.59,899.90 709.00,897.50
          709.00,897.50 689.11,886.93 689.11,886.93
          679.56,879.97 675.13,872.75 667.92,864.53
          667.92,864.53 663.68,860.40 663.68,860.40
          663.68,860.40 660.46,855.42 660.46,855.42
          660.46,855.42 652.42,846.16 652.42,846.16
          650.14,843.38 647.01,840.91 645.24,837.83
          645.24,837.83 641.25,828.17 641.25,828.17
          638.49,823.30 634.73,818.66 634.00,813.00
          634.00,813.00 630.00,813.00 630.00,813.00
          627.98,806.86 625.17,805.80 623.45,798.00
          623.45,798.00 621.73,776.00 621.73,776.00
          621.73,776.00 614.15,758.05 614.15,758.05
          614.15,758.05 609.50,751.76 609.50,751.76
          606.70,747.15 606.15,743.49 602.24,739.09
          602.24,739.09 593.72,731.10 593.72,731.10
          593.72,731.10 588.03,723.70 588.03,723.70
          588.03,723.70 582.83,718.74 582.83,718.74
          582.83,718.74 579.36,713.38 579.36,713.38
          577.82,711.47 575.92,710.46 574.79,708.47
          572.59,704.63 573.49,699.10 572.54,695.00
          572.54,695.00 568.69,684.91 568.69,684.91
          567.79,681.42 567.95,675.72 568.00,672.00
          568.10,664.84 570.75,661.48 572.55,654.83
          573.62,650.90 573.22,647.66 575.51,643.89
          575.51,643.89 584.45,631.68 584.45,631.68
          584.45,631.68 589.17,624.21 589.17,624.21
          589.17,624.21 593.20,619.63 593.20,619.63
          594.36,618.01 598.05,609.93 598.53,608.00
          602.04,593.96 590.98,580.36 588.69,573.56
          587.60,570.30 588.00,561.83 588.00,558.00
          593.47,556.51 593.07,554.91 596.13,550.74
          596.13,550.74 599.84,545.53 599.84,545.53
          603.17,538.88 602.99,532.41 609.60,524.00
          609.60,524.00 614.07,518.72 614.07,518.72
          614.07,518.72 618.17,510.21 618.17,510.21
          623.95,499.32 629.44,488.14 631.99,475.91
          631.99,475.91 631.99,471.17 631.99,471.17
          633.30,465.36 633.98,468.78 634.06,460.00
          634.06,460.00 634.06,441.09 634.06,441.09
          634.06,441.09 635.87,433.96 635.87,433.96
          635.87,433.96 637.03,420.09 637.03,420.09
          637.03,420.09 644.42,396.00 644.42,396.00
          644.42,396.00 648.16,385.96 648.16,385.96
          648.81,383.29 648.86,379.34 649.98,377.18
          649.98,377.18 661.33,364.55 661.33,364.55
          668.15,356.94 668.15,354.02 679.00,353.84
          679.00,353.84 711.00,353.84 711.00,353.84
          712.99,353.99 714.89,354.04 716.83,353.84
          722.27,352.11 736.77,344.81 740.11,340.41
          742.76,336.92 741.89,334.08 745.93,328.17
          745.93,328.17 757.49,312.83 757.49,312.83
          757.49,312.83 758.70,302.00 758.70,302.00
          758.70,302.00 766.08,282.00 766.08,282.00
          768.60,276.24 773.28,273.08 775.41,268.91
          778.14,263.58 775.76,260.79 779.56,256.38
          784.40,250.75 792.73,248.10 795.74,245.93
          797.48,244.67 800.91,239.75 802.50,237.72
          804.88,234.67 810.66,227.75 812.12,224.72
          814.51,219.77 817.31,210.52 821.47,206.87
          821.47,206.87 834.00,200.29 834.00,200.29
          834.00,200.29 853.53,188.95 853.53,188.95
          859.40,185.38 859.64,183.12 867.00,183.00
          878.24,182.83 885.26,183.93 894.72,190.88
          904.60,198.15 901.30,204.91 914.00,205.00
          914.00,205.00 943.00,205.00 943.00,205.00
          945.89,205.00 957.68,204.22 959.91,203.42
          959.91,203.42 979.42,191.64 979.42,191.64
          983.21,189.61 984.73,190.61 988.83,188.17
          995.99,183.90 1007.76,176.54 1016.00,176.00
          1018.16,169.07 1029.17,163.46 1036.00,162.13
          1036.00,162.13 1047.00,162.13 1047.00,162.13
          1047.00,162.13 1045.00,157.00 1045.00,157.00
          1051.83,154.12 1057.72,155.00 1065.00,155.00
          1065.00,155.00 1096.00,155.00 1096.00,155.00
          1098.69,155.04 1108.42,156.81 1110.01,158.74
          1110.87,159.78 1110.79,160.80 1111.00,162.00
          1113.79,162.00 1119.59,162.25 1122.00,161.41
          1128.57,159.09 1133.27,151.81 1139.11,147.99
          1139.11,147.99 1147.83,143.17 1147.83,143.17
          1147.83,143.17 1164.00,131.33 1164.00,131.33
          1169.87,127.43 1167.31,130.45 1175.02,124.16
          1175.02,124.16 1182.24,117.66 1182.24,117.66
          1188.87,112.19 1188.97,113.28 1189.00,104.00
          1189.00,104.00 1203.49,99.78 1203.49,99.78
          1203.49,99.78 1219.32,87.24 1219.32,87.24
          1219.32,87.24 1232.00,87.24 1232.00,87.24
          1234.56,78.88 1243.73,77.90 1251.00,78.00
          1259.65,78.13 1271.42,86.41 1280.00,86.73
          1281.72,87.05 1284.18,86.99 1285.83,86.73
          1290.03,85.31 1303.13,77.28 1306.57,74.02
          1310.26,70.52 1314.51,65.15 1319.09,63.10
          1319.09,63.10 1337.00,57.47 1337.00,57.47
          1337.00,57.47 1351.00,55.13 1351.00,55.13
          1357.06,54.45 1359.95,55.49 1368.00,53.56
          1372.31,52.53 1380.90,49.14 1384.83,47.09
          1384.83,47.09 1391.18,42.79 1391.18,42.79
          1391.18,42.79 1401.42,38.56 1401.42,38.56
          1401.42,38.56 1422.08,27.39 1422.08,27.39
          1422.08,27.39 1440.58,20.05 1440.58,20.05
          1442.34,19.31 1444.99,18.73 1446.28,17.41
          1447.42,16.25 1447.49,15.38 1448.00,14.00 Z
        M 1110.00,163.00
        C 1100.71,164.23 1091.03,165.79 1083.00,171.00
          1091.69,172.56 1108.30,174.93 1110.00,163.00 Z
        M 1052.00,164.00
        C 1052.00,164.00 1051.00,164.00 1051.00,164.00
          1051.00,164.00 1052.00,165.00 1052.00,165.00
          1052.00,165.00 1052.00,164.00 1052.00,164.00 Z
        M 1079.00,170.00
        C 1074.00,169.36 1070.93,167.07 1066.00,169.00
          1070.78,170.78 1073.95,172.00 1079.00,170.00 Z" />
</svg>
        
        );
}
export default AChina;