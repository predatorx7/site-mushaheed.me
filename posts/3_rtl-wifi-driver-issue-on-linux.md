---
title: Is your 'WIFI' driver on Linux Machine isn't working? maybe I can help you.
publish_date: 2019-02-24
---

When I switched to linux in the beginning, I experienced that the wifi on my
machine wasn't working. So, I changed countless numbers of OS, drivers & went
through various forums, repo for a solution to fix wifi which was not working on
my notebook. After hours of search I finally found the fix for it. I'm posting
it here so that anyone with the same problem could get help:

If your wireless driver is _rtl8192ce, rtl8192cu, rtl8192se, rtl8192de,
rtl8188ee, rtl8192ee, rtl8723ae, rtl8723be, rtl8821ae, rtl8822be or rtl8723de_
(from Realtek) doesn't work on a Linux Machine then this post is for you,
follow:

\***prerequisite**: You will need git, make, and gcc installed for those
commands to work. You will also need the kernel headers development package.

Open **Terminal Window** on your machine. (usually `CTRL + ALT + T`)

**Check what drivers your wireless adapter is currently using**, you may run the
following command:

`sudo lshw -C network`

- `lshw` lists information on your hardware
- `-C` network filters the output to only show the network class.

In the output, look for the entry with description: `Wireless interface`

**You can also use the command:** `lspci`

When you post lspci output, you should always use the `-nn` flags, i.e.
`lspci -nn`. That way, the PCI IDs will be listed. Those are important because
that is the information that tells the kernel what driver to load.

**!Do the following commands AS A REGULAR USER WITHOUT SUDO:**

In my case, the driver I have is an RTL8723DE device as the ID for it is
10ec:d723. Therfore, I need the extended branch of this repo:

`git clone https://github.com/lwfinger/rtlwifi_new.git -b extended`

OR you can just use: `git clone https://github.com/lwfinger/rtlwifi_new.git`

then do these commands in sequence:

`cd rtlwifi_new`

`make`

`sudo make install`

then reboot to your firmware settings (BIOS) to switch "Secure Boot" OFF by:

`systemctl reboot --firmware-setup`

Incase if "Secure Boot" is already OFF then:

`sudo reboot`

## Note: 
1. You'll need to  repeat  the `make` & `sudo make install` steps with any kernel updates. (or the wifi will fail again.) tip: Use git pull.
2. You may **experience wifi Signal for Rtl8723DE & Rtl8723BE drivers to be low**, especially on HP devices, which maybe is a bug.
