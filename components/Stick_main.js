import React, { useState } from "react";
import {StyleSheet, View, Dimensions, Text} from "react-native";
import CircleSlider from "react-native-circle-slider/CircleSlider";
import ColorPicker from 'react-native-wheel-color-picker';



export default function CircleSliderContainer () {

    const RGB_MAX = 255
    const HUE_MAX = 360
    const SV_MAX = 100

    const normalize = (degrees) => ((degrees % 360 + 360) % 360)

    const rgb2Hsv = (r, g, b) => {
        if (typeof r === 'object') {
            const args = r
            r = args.r; g = args.g; b = args.b;
        }

        // It converts [0,255] format, to [0,1]
        r = (r === RGB_MAX) ? 1 : (r % RGB_MAX / parseFloat(RGB_MAX))
        g = (g === RGB_MAX) ? 1 : (g % RGB_MAX / parseFloat(RGB_MAX))
        b = (b === RGB_MAX) ? 1 : (b % RGB_MAX / parseFloat(RGB_MAX))

        let max = Math.max(r, g, b)
        let min = Math.min(r, g, b)
        let h, s, v = max

        let d = max - min

        s = max === 0 ? 0 : d / max

        if (max === min) {
            h = 0 // achromatic
        } else {
            switch (max) {
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0)
                    break
                case g:
                    h = (b - r) / d + 2
                    break
                case b:
                    h = (r - g) / d + 4
                    break
            }
            h /= 6
        }

        return {
            h: Math.round(h * HUE_MAX),
            s: Math.round(s * SV_MAX),
            v: Math.round(v * SV_MAX)
        }
    }


    const hsv2Rgb = (h, s, v) => {
        if (typeof h === 'object') {
            const args = h
            h = args.h; s = args.s; v = args.v;
        }

        h = normalize(h)
        h = (h === HUE_MAX) ? 1 : (h % HUE_MAX / parseFloat(HUE_MAX) * 6)
        s = (s === SV_MAX) ? 1 : (s % SV_MAX / parseFloat(SV_MAX))
        v = (v === SV_MAX) ? 1 : (v % SV_MAX / parseFloat(SV_MAX))

        let i = Math.floor(h)
        let f = h - i
        let p = v * (1 - s)
        let q = v * (1 - f * s)
        let t = v * (1 - (1 - f) * s)
        let mod = i % 6
        let r = [v, q, p, p, t, v][mod]
        let g = [t, v, v, q, p, p][mod]
        let b = [p, p, t, v, v, q][mod]

        return {
            r: Math.floor(r * RGB_MAX),
            g: Math.floor(g * RGB_MAX),
            b: Math.floor(b * RGB_MAX),
        }
    }
    const rgb2Hex = (r, g, b) => {
        if (typeof r === 'object') {
            const args = r
            r = args.r; g = args.g; b = args.b;
        }
        r = Math.round(r).toString(16)
        g = Math.round(g).toString(16)
        b = Math.round(b).toString(16)

        r = r.length === 1 ? '0' + r : r
        g = g.length === 1 ? '0' + g : g
        b = b.length === 1 ? '0' + b : b

        return '#' + r + g + b
    }
    const hex2Hsv = (hex) => {
        let rgb = hex2Rgb(hex)
        return rgb2Hsv(rgb.r, rgb.g, rgb.b)
    }
    const hex2Rgb = (hex) => {
        let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null
    }
    const hsv2Hex = (h, s, v) => {
        let rgb = hsv2Rgb(h, s, v);
        return rgb2Hex(rgb.r, rgb.g, rgb.b)
    }

    const [status, setStatus] = useState(0);
    const [sc, setSc] = useState('#FFFFFF');
    const [comc, setComc] = useState('#FFFFFF');
    function LightenDarkenColor(col, amt) {
        col = col.substr(1);
        let hsv = hex2Hsv(col);
        setComc(hsv2Hex(hsv.h, hsv.s, amt));
    }

    function LightenDarkenColorCallback(amt) {
        amt = 100 - ((amt/360)*100);
        return(LightenDarkenColor(sc, amt));
    }
    return (
        <View style={{flex: 1, flexDirection: 'column'} }>
            <View style={{alignItems: "center", paddingTop: 30,  position: 'absolute', left: '42%'}}>
                <CircleSlider dialRadius={220} value={185} meterColor={'white'} btnRadius = {15} min={185} max={359} xCenter={Dimensions.get("window").width} onValueChange={(x) => setStatus(x)} />
                <ColorPicker
                    style={[styles.box, {
                        transform: [{ rotate: `${status}deg` }],
                        transformOrigin: 'center'
                    }]}
                    onColorChange={ (x) => setSc(x)}
                    thumbSize={30}
                    noSnap={false}
                    row={false}
                />
            </View>
            <View style={{alignItems: "center", paddingTop: 30,  position: 'absolute', top: 400, left: 50 }}>
                <CircleSlider dialRadius={100} value={1} meterColor={'white'} btnRadius = {15} min={0} max={359} yCenter={400}  onValueChange={(x) => LightenDarkenColorCallback(x)}/>
                <View style={[styles.mini_c, { backgroundColor: `${comc}`}]}>
                    <Text style={{color: 'white'}}>
                        {comc}
                    </Text>
                </View>
            </View>
        </View>

    );}
const styles = StyleSheet.create({
    box:{
        position: 'absolute',
        top: 65,
    },
    mini_c:{
        width: 110,
        height: 110,
        position: 'absolute',
        top: 95,
        borderRadius: 90,
    }
});
