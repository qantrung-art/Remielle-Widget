<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=28&pause=1000&color=C084FC&center=true&vCenter=true&width=700&lines=Remielle+the+Widget+%F0%9F%8C%B8;Your+AI+Companion%2C+Everywhere" alt="Typing SVG" />

# 🌸 Remielle the Widget

### Chrome Extension Collection — Remielle, trợ lý AI của bạn trên Claude & ChatGPT

**Remielle the Widget** mang nhân vật **Remielle** — trợ lý AI sinh động — đến góc màn hình khi bạn trò chuyện với Claude hay ChatGPT. Remielle tự động thay đổi biểu cảm theo từng trạng thái thực — từ lúc bạn gõ phím cho đến khi AI hoàn thành câu trả lời.

> 💡 **Inspired by & Credits to** [Gemielle](https://github.com/Rainan1010/Gemielle) by **[Rainan1010](https://github.com/Rainan1010)**
> — bản gốc ghép **Remielle** + **Gemini** = Gemielle. Dự án này đưa Remielle đến với Claude và ChatGPT.

<br/>

[![Claude](https://img.shields.io/badge/✅_Claude-Claude.ai-CC785C?style=for-the-badge&logo=anthropic&logoColor=white)](#-Claude--cho-claudeai)
[![ChatGPT](https://img.shields.io/badge/✅_ChatGPT-ChatGPT.com-74AA9C?style=for-the-badge&logo=openai&logoColor=white)](#-ChatGPT--cho-chatgptcom)
[![Chrome](https://img.shields.io/badge/Chrome-Extension-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white)](https://developer.chrome.com/docs/extensions/)
[![Manifest V3](https://img.shields.io/badge/Manifest-V3-22C55E?style=for-the-badge)](https://developer.chrome.com/docs/extensions/develop/migrate/what-is-mv3)
[![License: MIT](https://img.shields.io/badge/License-MIT-F59E0B?style=for-the-badge)](LICENSE)

</div>

---

## 📦 Các extension trong bộ

| Extension | Nền tảng | Thư mục | Hướng dẫn |
|---|---|---|---|
| 🌸 **Claude** | [claude.ai](https://claude.ai) | [`/Claude`](./Claude/) | [Xem README →](./Claude/README.md) |
| 🌿 **ChatGPT** | [chatgpt.com](https://chatgpt.com) | [`/ChatGPT`](./ChatGPT/) | [Xem README →](./ChatGPT/README.md) |

---

## ✨ Tính năng nổi bật & Tương tác

- 🎭 **5 Trạng thái biểu cảm sinh động** — Remielle thay đổi GIF thời gian thực theo từng tiến trình hội thoại.
- 🖱️ **Kéo thả tự do (Drag & Drop)** — Nhấp giữ chuột để di chuyển Remielle tới bất kỳ đâu trên màn hình.
- 🔍 **Phóng to / Thu nhỏ linh hoạt (Zoom/Resize)** — Lăn con trỏ chuột (`Scroll Wheel`) lên GIF để phóng to hoặc thu nhỏ Remielle theo ý thích. Kích thước được tự động ghi nhớ cho lần truy cập sau!
- 🌸 **Hiệu ứng Hoa Anh Đào khi Nhấp chuột (Click & Sakura Burst)** — Nhấp chuột vào Remielle để xem hiệu ứng zoom nhẹ sinh động cùng các cánh hoa anh đào (sakura) rơi rơi dịu dàng và mờ dần!

---

## 🎭 5 Trạng thái biểu cảm

| Trạng thái | GIF | Mô tả |
| :--- | :---: | :--- |
| **WAITING** | ![Waiting](Claude/assets/waiting_user_input.gif) | Chờ bạn nhập prompt |
| **USER_TYPING** | ![Typing](Claude/assets/user_typing.gif) | Bạn đang gõ vào ô chat |
| **AI_THINKING** | ![Thinking](Claude/assets/ai_thingking.gif) | AI đang xử lý yêu cầu |
| **AI_TYPING** | ![Generating](Claude/assets/ai_typing.gif) | AI đang viết câu trả lời |
| **AI_COMPLETE** | ![Complete](Claude/assets/ai_complete_answer.gif) | AI đã trả lời xong! |

---

## 🚀 Hướng dẫn cài đặt nhanh

> ✅**Chỉ cần làm theo 4 bước!**

### Bước 1 — Tải về & Giải nén

1. Nhấn nút **`< > Code`** (màu xanh lá, góc trên phải trang này)
2. Chọn **`Download ZIP`** → Lưu về máy
3. **Giải nén** file `.zip`:
   - **Windows:** Chuột phải → *"Giải nén tất cả..."* → *"Giải nén"*
   - **Mac:** Nhấn đúp vào file `.zip`

---

### Bước 2 — Bật Developer Mode trong Chrome

1. Mở **Google Chrome**
2. Gõ vào thanh địa chỉ: **`chrome://extensions`** → Enter
3. Bật công tắc **"Developer mode"** ở góc trên bên phải

---

### Bước 3 — Cài extension bạn muốn dùng

Nhấn **"Load unpacked"** → chọn **một trong hai thư mục** bên dưới:

```
📁 Gemielle-Extended-main/
├── 📁 Claude/    ← Chọn thư mục này nếu dùng Claude
└── 📁 ChatGPT/     ← Chọn thư mục này nếu dùng ChatGPT
```

> 💡 Bạn có thể cài **cả hai cùng lúc** — chúng độc lập nhau và chỉ kích hoạt trên đúng trang web của mình.

---

### Bước 4 — Trải nghiệm!

| Extension | Truy cập trang | Kết quả |
|---|---|---|
| Claude | [claude.ai](https://claude.ai) | Nhân vật xuất hiện góc dưới phải |
| ChatGPT | [chatgpt.com](https://chatgpt.com) | Nhân vật xuất hiện góc dưới phải |

> 💡 **Kéo thả** nhân vật đến bất kỳ vị trí nào trên màn hình tùy thích.

---

## 🌸 Claude — cho Claude.ai

<details>
<summary><b>Xem chi tiết về Claude</b></summary>

**Claude** được tối ưu đặc biệt cho Claude:

- Nhận diện **Claude Thinking Block** (tính năng "extended thinking" của Claude) — không nhầm với AI_TYPING
- Xử lý điều hướng SPA khi bạn chuyển cuộc trò chuyện
- Tự động reset về WAITING sau 3 giây khi AI hoàn thành
- Selector ổn định dùng `data-testid` thay vì class names dễ thay đổi

**→ [Hướng dẫn cài đặt chi tiết Claude](./Claude/README.md)**

</details>

---

## 🌿 ChatGPT — cho ChatGPT.com

<details>
<summary><b>Xem chi tiết về ChatGPT</b></summary>

**ChatGPT** được tối ưu đặc biệt cho ChatGPT:

- Tận dụng nút **"Stop generating"** — tín hiệu đặc trưng khi ChatGPT đang chạy
- Multi-selector fallback — dự phòng nhiều selector khi OpenAI thay đổi giao diện
- Polling 800ms kết hợp MutationObserver để đảm bảo không bỏ sót trạng thái
- Xử lý điều hướng SPA giữa các cuộc trò chuyện

**→ [Hướng dẫn cài đặt chi tiết ChatGPT](./ChatGPT/README.md)**

</details>

---

## ❓ Câu hỏi thường gặp

<details>
<summary><b>Tôi có thể cài cả hai extension cùng lúc không?</b></summary>

**Có!** Claude chỉ kích hoạt trên `claude.ai` và ChatGPT chỉ kích hoạt trên `chatgpt.com`. Chúng hoàn toàn độc lập và không ảnh hưởng lẫn nhau.

</details>

<details>
<summary><b>Extension có an toàn không? Có đọc tin nhắn của tôi không?</b></summary>

**Hoàn toàn an toàn và minh bạch.** Cả hai extension:
- Chỉ quan sát **cấu trúc giao diện** (ví dụ: có nút Stop chưa, ô input có chữ không)
- **Không đọc, không lưu, không gửi** nội dung tin nhắn ra ngoài
- Không có bất kỳ kết nối mạng nào
- Toàn bộ code chỉ nằm trong một file `content.js` — bạn tự kiểm tra được

</details>

<details>
<summary><b>Extension ngừng hoạt động sau khi AI cập nhật giao diện?</b></summary>

ChatGPT và Claude thỉnh thoảng thay đổi cấu trúc HTML. Hãy theo dõi trang GitHub này để cập nhật bản mới. Nếu gặp lỗi, hãy mở **Issues** và mô tả vấn đề.

</details>

<details>
<summary><b>Không thấy nút "Load unpacked"?</b></summary>

Bạn chưa bật **Developer mode**. Quay lại Bước 2, đảm bảo công tắc đã bật (màu xanh). Nút "Load unpacked" sẽ tự xuất hiện.

</details>

---

## 🔧 Gỡ cài đặt

1. Vào `chrome://extensions`
2. Tìm **Claude** hoặc **ChatGPT**
3. Nhấn **"Remove"** → Xác nhận

---

## 📁 Cấu trúc thư mục

```
Remielle-Widget/
├── 📄 README.md              ← Bạn đang đọc file này
├── 📄 LICENSE
│
├── 📁 Claude/             ← Extension cho Claude
│   ├── 📄 manifest.json
│   ├── 📄 content.js
│   ├── 📄 style.css
│   ├── 📄 README.md
│   └── 📁 assets/
│       ├── waiting_user_input.gif
│       ├── user_typing.gif
│       ├── ai_thingking.gif
│       ├── ai_typing.gif
│       └── ai_complete_answer.gif
│
└── 📁 ChatGPT/              ← Extension cho ChatGPT
    ├── 📄 manifest.json
    ├── 📄 content.js
    ├── 📄 style.css
    ├── 📄 README.md
    └── 📁 assets/
        ├── waiting_user_input.gif
        ├── user_typing.gif
        ├── ai_thingking.gif
        ├── ai_typing.gif
        └── ai_complete_answer.gif
```

---

## 📜 Nguồn gốc & Tín dụng

Dự án này được xây dựng dựa trên ý tưởng từ **[Gemielle](https://github.com/Rainan1010/Gemielle)** — Chrome Extension trợ lý AI cho Google Gemini, được tạo bởi **[Rainan1010](https://github.com/Rainan1010)**.

Cái tên **Gemielle** = **Remielle** (nhân vật) + **Gemini** (AI). **Remielle the Widget** giữ nguyên nhân vật Remielle nhưng giải phóng cô khỏi một nền tảng duy nhất — giờ cô đồng hành cùng bạn trên Claude và ChatGPT.

Kế thừa từ Gemielle:
- ✅ Ý tưởng widget nhân vật AI nổi trên màn hình
- ✅ 5 trạng thái biểu cảm và bộ GIF assets của Remielle
- ✅ Tính năng Drag & Drop
- ✅ Triết lý hoạt động hoàn toàn client-side, không thu thập dữ liệu

---

## ⚠️ Miễn trừ trách nhiệm

- **Remielle the Widget** là dự án mã nguồn mở cá nhân, **không liên kết với Anthropic (Claude) hay OpenAI (ChatGPT)**.
- Các extension hoạt động hoàn toàn phía client, **không thu thập hay lưu trữ bất kỳ dữ liệu cá nhân nào**.
- Vì các nền tảng AI có thể cập nhật giao diện bất kỳ lúc nào, một số tính năng có thể cần cập nhật theo.

---

<div align="center">

Made with 💜💚 | Inspired by [Gemielle](https://github.com/Rainan1010/Gemielle) by [Rainan1010](https://github.com/Rainan1010)

</div>
