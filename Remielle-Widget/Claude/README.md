<div align="center">

[← Về Remielle the Widget](../README.md)

# 🌸 Claude — Remielle trên Claude.ai

**Claude** là một phần trong bộ **[Remielle the Widget](../README.md)** — đưa nhân vật **Remielle** đến góc màn hình khi bạn dùng **Claude** (`claude.ai`). Remielle tự động thay đổi biểu cảm theo từng trạng thái của cuộc hội thoại — từ lúc bạn gõ phím cho đến khi AI hoàn thành câu trả lời.

> 💡 **Inspired by** [Gemielle](https://github.com/Rainan1010/Gemielle) — bản gốc dành cho Google Gemini, được tác giả **Rainan1010** xây dựng.

[![Platform](https://img.shields.io/badge/Platform-Claude.ai-CC785C?style=for-the-badge&logo=anthropic&logoColor=white)](https://claude.ai)
[![Chrome Extension](https://img.shields.io/badge/Chrome-Extension-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white)](https://developer.chrome.com/docs/extensions/)
[![Manifest V3](https://img.shields.io/badge/Manifest-V3-green?style=for-the-badge)](https://developer.chrome.com/docs/extensions/develop/migrate/what-is-mv3)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

</div>

---

## ✨ Tính năng nổi bật & Tương tác

- 🎭 **5 Trạng thái biểu cảm** — Theo dõi chính xác từng bước trong cuộc hội thoại với Claude.
- 🖱️ **Kéo thả tự do (Drag & Drop)** — Nhấp giữ và di chuyển nhân vật đến bất kỳ vị trí nào.
- 🔍 **Phóng to / Thu nhỏ (Scroll Wheel)** — Cuộn con trỏ chuột lên Remielle để tùy chỉnh kích thước lớn/nhỏ (tự động lưu thiết lập).
- 🌸 **Hiệu ứng Sakura khi Click** — Nhấp chuột vào Remielle để xem phản ứng zoom nhẹ và bùng nổ cánh hoa anh đào rơi tự nhiên!
- ⚡ **Nhận diện thông minh:**
  - Phát hiện khi bạn đang gõ prompt.
  - Phân biệt trạng thái Claude đang "suy nghĩ" với lúc thực sự đang viết câu trả lời.
  - Tự reset về WAITING sau khi AI hoàn thành.
  - Xử lý điều hướng SPA (chuyển cuộc trò chuyện không cần tải lại trang).
- 🔒 **Bảo mật tuyệt đối** — Không thu thập, không gửi bất kỳ dữ liệu nào. Hoàn toàn client-side.

---

## 🎭 Các trạng thái của trợ lý

| Trạng thái | GIF | Mô tả |
| :--- | :---: | :--- |
| **WAITING** | ![Waiting](assets/waiting_user_input.gif) | Chờ bạn nhập prompt |
| **USER_TYPING** | ![Typing](assets/user_typing.gif) | Bạn đang gõ vào ô chat |
| **AI_THINKING** | ![Thinking](assets/ai_thingking.gif) | Claude đang xử lý yêu cầu |
| **AI_TYPING** | ![Generating](assets/ai_typing.gif) | Claude đang viết câu trả lời |
| **AI_COMPLETE** | ![Complete](assets/ai_complete_answer.gif) | Claude đã trả lời xong! |

> 💡 Bạn cũng có thể cài thêm **[ChatGPT](../ChatGPT/README.md)** cho ChatGPT — cả hai không ảnh hưởng nhau.

---

## 🚀 Hướng dẫn cài đặt chi tiết

> ✅ **Không cần biết lập trình.** Làm theo từng bước dưới đây là được!

---

### 📥 Bước 1 — Tải extension về máy

1. Ở trang GitHub này, nhấn nút **`< > Code`** (màu xanh lá) ở góc trên bên phải
2. Chọn **`Download ZIP`**
3. Mở file `.zip` vừa tải → chọn **Giải nén tất cả** (Extract All)
4. Ghi nhớ vị trí thư mục vừa giải nén (ví dụ: `C:\Users\TênBạn\Downloads\Claude-main`)

---

### ⚙️ Bước 2 — Bật chế độ Developer trong Chrome

> Bước này chỉ cần làm **một lần duy nhất**.

1. Mở trình duyệt **Google Chrome**
2. Trên thanh địa chỉ, gõ: `chrome://extensions` rồi nhấn **Enter**
3. Ở góc **trên bên phải** trang, bật công tắc **"Developer mode"** (Chế độ nhà phát triển)

   ![Developer Mode](https://i.imgur.com/placeholder_devmode.png)

---

### 📂 Bước 3 — Tải extension vào Chrome

1. Nhấn nút **"Load unpacked"** (Tải tiện ích đã giải nén) xuất hiện ở góc trên bên trái
2. Một cửa sổ chọn thư mục hiện ra → duyệt đến thư mục **`Claude-main`** vừa giải nén
3. Chọn **đúng thư mục đó** (không phải file bên trong) → nhấn **"Select Folder"** (hoặc "Chọn thư mục")
4. Claude sẽ xuất hiện trong danh sách tiện ích với icon ✅

---

### 🎉 Bước 4 — Trải nghiệm!

1. Mở tab mới và truy cập **[claude.ai](https://claude.ai)**
2. Nhân vật trợ lý sẽ hiện ở **góc dưới bên phải** màn hình
3. Bắt đầu nhắn tin với Claude và xem nhân vật phản ứng!

> 💡 **Mẹo:** Bạn có thể **kéo thả** nhân vật đến bất kỳ vị trí nào trên màn hình tùy thích.

---

## ❓ Câu hỏi thường gặp (FAQ)

<details>
<summary><b>Nhân vật không xuất hiện sau khi cài đặt?</b></summary>

- Kiểm tra bạn đang dùng đúng trang `claude.ai` (không phải app Claude trên máy tính)
- Thử tải lại trang (F5) sau khi cài extension
- Đảm bảo extension **chưa bị tắt** trong `chrome://extensions`

</details>

<details>
<summary><b>Tôi đã giải nén nhưng không biết chọn thư mục nào ở bước 3?</b></summary>

Chọn thư mục **`Claude-main`** — thư mục đó phải chứa các file: `manifest.json`, `content.js`, `style.css` và thư mục `assets`. Nếu đúng rồi mà vẫn lỗi, thử chọn thư mục cha chứa tất cả các file đó.

</details>

<details>
<summary><b>Extension có an toàn không? Có đọc tin nhắn của tôi không?</b></summary>

**Hoàn toàn an toàn.** Claude chỉ quan sát **cấu trúc giao diện** (DOM) của trang web để biết khi nào bạn gõ và khi nào AI đang trả lời — tương tự như một người nhìn vào màn hình. Extension **không đọc nội dung tin nhắn**, không gửi dữ liệu ra ngoài, và không có kết nối mạng. Bạn có thể tự kiểm tra toàn bộ mã nguồn trong file `content.js`.

</details>

<details>
<summary><b>Extension ngừng hoạt động sau một thời gian?</b></summary>

Claude thỉnh thoảng cập nhật giao diện, có thể làm ảnh hưởng các selector. Hãy kiểm tra trang GitHub này để xem có bản cập nhật mới không.

</details>

---

## 🔧 Gỡ cài đặt

Vào `chrome://extensions` → Tìm **Claude** → Nhấn **"Remove"** (Xoá).

---

## 📜 Nguồn gốc & Tín dụng

Claude được xây dựng dựa trên ý tưởng và cảm hứng từ **[Gemielle](https://github.com/Rainan1010/Gemielle)** — Chrome Extension trợ lý AI cho Google Gemini, được tạo bởi **[Rainan1010](https://github.com/Rainan1010)**.

Claude là bản viết lại độc lập cho nền tảng **Claude (claude.ai)** với kiến trúc adapter riêng, xử lý SPA navigation, và tối ưu cho các đặc điểm DOM của Anthropic Claude.

---

## ⚠️ Miễn trừ trách nhiệm

- **Claude** là dự án mã nguồn mở cá nhân, **không liên kết với Anthropic** hay Claude.
- Extension hoạt động hoàn toàn phía client, **không thu thập hay lưu trữ bất kỳ dữ liệu cá nhân nào**.
- Vì Claude có thể cập nhật giao diện bất kỳ lúc nào, một số tính năng có thể cần cập nhật theo.

---

<div align="center">

Made with 💜 | Inspired by [Gemielle](https://github.com/Rainan1010/Gemielle) by Rainan1010

</div>
