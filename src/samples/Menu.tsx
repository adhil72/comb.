"use client";

import Button from "@/Library/Button";
import Menu from "@/Library/Menu";
import { useState } from "react";

export default function MenuSample() {
    const [openMenu, setOpenMenu] = useState(false)
    return <div>

        <div className="w-full flex justify-center">

            <div>
                <Button onClick={() => setOpenMenu(!openMenu)} variant="contained" className="bg-tint-dark">Open Menu</Button>
                <Menu
                    items={[
                        { name: "+91", icon: <span>🇮🇳</span> },
                        { name: "+1", icon: <span>🇺🇸</span> },
                        { name: "+44", icon: <span>🇬🇧</span> },
                        { name: "+81", icon: <span>🇯🇵</span> },
                        { name: "+86", icon: <span>🇨🇳</span> },
                        { name: "+82", icon: <span>🇰🇷</span> },
                        { name: "+49", icon: <span>🇩🇪</span> },
                        { name: "+33", icon: <span>🇫🇷</span> },
                        { name: "+39", icon: <span>🇮🇹</span> },
                        { name: "+7", icon: <span>🇷🇺</span> },
                        { name: "+86", icon: <span>🇨🇳</span> },
                        { name: "+82", icon: <span>🇰🇷</span> },
                        { name: "+49", icon: <span>🇩🇪</span> },
                        { name: "+33", icon: <span>🇫🇷</span> },
                        { name: "+39", icon: <span>🇮🇹</span> },
                        { name: "+7", icon: <span>🇷🇺</span> },
                        { name: "+86", icon: <span>🇨🇳</span> },
                        { name: "+82", icon: <span>🇰🇷</span> },
                        { name: "+49", icon: <span>🇩🇪</span> },
                        { name: "+33", icon: <span>🇫🇷</span> },
                        { name: "+39", icon: <span>🇮🇹</span> },
                        { name: "+7", icon: <span>🇷🇺</span> }
                    ]}
                    open={openMenu}
                    onClose={() => setOpenMenu(false)} 
                    />
            </div>
        </div>

    </div>
}