<div align="center">

[← Về Remielle the Widget](../README.md)

# 🌸 ChatGPT — Remielle trên ChatGPT.com

**ChatGPT** là một phần trong bộ **[Remielle the Widget](../README.md)** — đưa nhân vật **Remielle** đến góc màn hình khi bạn dùng **ChatGPT** (`chatgpt.com`). Remielle tự động thay đổi biểu cảm theo từng trạng thái của cuộc hội thoại — từ lúc bạn gõ phím cho đến khi AI hoàn thành câu trả lời.

> 💡 **Inspired by** [Gemielle](https://github.com/Rainan1010/Gemielle) — bản gốc dành cho Google Gemini, được tác giả **Rainan1010** xây dựng.

[![Platform](https://img.shields.io/badge/Platform-ChatGPT-74AA9C?style=for-the-badge&logo=openai&logoColor=white)](https://chatgpt.com)
[![Chrome Extension](https://img.shields.io/badge/Chrome-Extension-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white)](https://developer.chrome.com/docs/extensions/)
[![Manifest V3](https://img.shields.io/badge/Manifest-V3-green?style=for-the-badge)](https://developer.chrome.com/docs/extensions/develop/migrate/what-is-mv3)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

</div>

---

## ✨ Tính năng nổi bật & Tương tác

- 🎭 **5 Trạng thái biểu cảm** — Theo dõi chính xác từng bước trong cuộc hội thoại với ChatGPT.
- 🖱️ **Kéo thả tự do (Drag & Drop)** — Nhấp giữ và di chuyển nhân vật đến bất kỳ vị trí nào.
- 🔍 **Phóng to / Thu nhỏ (Scroll Wheel)** — Cuộn con trỏ chuột lên Remielle để tùy chỉnh kích thước lớn/nhỏ (tự động lưu thiết lập).
- 🌸 **Hiệu ứng Sakura khi Click** — Nhấp chuột vào Remielle để xem phản ứng zoom nhẹ và bùng nổ cánh hoa anh đào rơi tự nhiên!
- ⚡ **Nhận diện thông minh:**
  - Phát hiện khi bạn đang gõ prompt.
  - Nhận biết nút **"Stop generating"** — tín hiệu đặc trưng của ChatGPT khi AI đang chạy.
  - Tự động reset về WAITING sau khi AI hoàn thành.
  - Xử lý điều hướng SPA (chuyển cuộc trò chuyện không cần tải lại trang).
- 🔒 **Bảo mật tuyệt đối** — Không thu thập, không gửi bất kỳ dữ liệu nào. Hoàn toàn client-side.

---

## 🎭 Các trạng thái của trợ lý

| Trạng thái | GIF | Mô tả |
| :--- | :---: | :--- |
| **WAITING** | ![Waiting](assets/waiting_user_input.gif) | Chờ bạn nhập prompt |
| **USER_TYPING** | ![Typing](assets/user_typing.gif) | Bạn đang gõ vào ô chat |
| **AI_THINKING** | ![Thinking](assets/ai_thingking.gif) | ChatGPT đang xử lý yêu cầu |
| **AI_TYPING** | ![Generating](assets/ai_typing.gif) | ChatGPT đang viết câu trả lời |
| **AI_COMPLETE** | ![Complete](assets/ai_complete_answer.gif) | ChatGPT đã trả lời xong! |

> 💡 Bạn cũng có thể cài thêm **[Claude](../Claude/README.md)** cho Claude — cả hai không ảnh hưởng nhau.

---

## 🚀 Hướng dẫn cài đặt chi tiết

> ✅ **Không cần biết lập trình.** Làm theo từng bước dưới đây là được!

---

### 📥 Bước 1 — Tải extension về máy

1. Ở trang GitHub này, nhấn nút **`< > Code`** (màu xanh lá) ở góc trên bên phải
2. Chọn **`Download ZIP`**
3. Mở file `.zip` vừa tải về:
   - **Windows:** Nhấn chuột phải vào file → chọn **"Giải nén tất cả..."** → nhấn **"Giải nén"**
   - **Mac:** Nhấn đúp vào file `.zip` là tự động giải nén
4. Ghi nhớ vị trí thư mục vừa giải nén (ví dụ: `C:\Users\TênBạn\Downloads\ChatGPT-main`)

---

### ⚙️ Bước 2 — Bật chế độ Developer trong Chrome

> Bước này chỉ cần làm **một lần duy nhất**.

1. Mở trình duyệt **Google Chrome**
2. Trên thanh địa chỉ, gõ chính xác: `chrome://extensions` rồi nhấn **Enter**
3. Ở góc **trên bên phải** trang, tìm công tắc **"Developer mode"** (Chế độ nhà phát triển) và **bật lên**

   > 🔔 Sau khi bật, bạn sẽ thấy 3 nút mới xuất hiện ở góc trên bên trái: *"Load unpacked"*, *"Pack extension"*, *"Update"*

---

### 📂 Bước 3 — Tải extension vào Chrome

1. Nhấn nút **"Load unpacked"** (Tải tiện ích đã giải nén)
2. Một cửa sổ chọn thư mục hiện ra
3. Duyệt đến thư mục **`ChatGPT-main`** (thư mục vừa giải nén ở Bước 1)

   > ⚠️ **Chú ý quan trọng:** Chọn **đúng thư mục `ChatGPT-main`**, không phải file bên trong nó. Thư mục đúng phải chứa các file: `manifest.json`, `content.js`, `style.css` và thư mục `assets`.

4. Nhấn **"Select Folder"** (hoặc "Chọn thư mục" / "Open")
5. ChatGPT xuất hiện trong danh sách với icon ✅ là thành công!

---

### 🎉 Bước 4 — Trải nghiệm!

1. Mở tab mới và truy cập **[chatgpt.com](https://chatgpt.com)**
2. Nhân vật trợ lý sẽ hiện ở **góc dưới bên phải** màn hình
3. Bắt đầu chat với ChatGPT và xem nhân vật phản ứng theo từng trạng thái!

> 💡 **Mẹo:** Bạn có thể **kéo thả** nhân vật đến bất kỳ vị trí nào trên màn hình.

---

## 📋 Yêu cầu hệ thống

| Yêu cầu | Chi tiết |
|---|---|
| Trình duyệt | **Google Chrome** (phiên bản 88 trở lên) |
| Hệ điều hành | Windows, macOS, Linux |
| Tài khoản | Tài khoản ChatGPT (miễn phí hoặc trả phí đều được) |

> ⚠️ Extension chỉ hoạt động trên **Google Chrome**. Không hỗ trợ Firefox, Safari, hay Edge (dù Edge dựa trên Chromium, chưa được kiểm tra).

---

## ❓ Câu hỏi thường gặp (FAQ)

<details>
<summary><b>Nhân vật không xuất hiện trên ChatGPT?</b></summary>

Thử lần lượt các bước sau:
1. Tải lại trang ChatGPT (nhấn **F5** hoặc **Ctrl+R**)
2. Vào `chrome://extensions` kiểm tra xem ChatGPT có đang **bật** không (công tắc màu xanh)
3. Tắt rồi bật lại extension
4. Nếu vẫn không được: xoá extension → cài lại từ đầu

</details>

<details>
<summary><b>Tôi không thấy nút "Load unpacked" ở Bước 3?</b></summary>

Bạn chưa bật **"Developer mode"**. Quay lại Bước 2, đảm bảo công tắc Developer mode đã được **bật** (màu xanh). Sau đó nút "Load unpacked" sẽ xuất hiện.

</details>

<details>
<summary><b>Tôi chọn thư mục rồi nhưng Chrome báo lỗi?</b></summary>

Có thể bạn chọn nhầm thư mục. Hãy đảm bảo thư mục bạn chọn **trực tiếp chứa** file `manifest.json`. Nếu bạn giải nén và thấy có thêm một thư mục con bên trong, hãy chọn thư mục con đó.

</details>

<details>
<summary><b>Extension có đọc nội dung tin nhắn của tôi không?</b></summary>

**Không.** ChatGPT chỉ theo dõi **cấu trúc giao diện** của trang — ví dụ như phát hiện khi nút "Stop generating" xuất hiện (tức là AI đang chạy) hoặc khi ô input có chữ (tức là bạn đang gõ). Extension **không đọc, không lưu, không gửi** nội dung tin nhắn ra bất kỳ đâu. Toàn bộ mã nguồn trong file `content.js` để bạn tự kiểm tra.

</details>

<details>
<summary><b>Nhân vật hoạt động sai trạng thái / không đổi GIF?</b></summary>

OpenAI thỉnh thoảng cập nhật giao diện ChatGPT, có thể làm thay đổi cấu trúc HTML. Hãy kiểm tra trang GitHub này để xem có bản cập nhật mới. Nếu muốn báo lỗi, mở **Issues** trên GitHub và mô tả vấn đề.

</details>

<details>
<summary><b>Làm thế nào để ẩn nhân vật tạm thời?</b></summary>

Vào `chrome://extensions` → Tìm ChatGPT → Nhấn công tắc để **tắt** extension. Để hiện lại, bật công tắc đó lên và tải lại trang ChatGPT.

</details>

---

## 🔧 Gỡ cài đặt

1. Vào `chrome://extensions`
2. Tìm **ChatGPT**
3. Nhấn **"Remove"** (Xoá) → Xác nhận

---

## 📜 Nguồn gốc & Tín dụng

ChatGPT được xây dựng dựa trên ý tưởng và cảm hứng từ **[Gemielle](https://github.com/Rainan1010/Gemielle)** — Chrome Extension trợ lý AI cho Google Gemini, được tạo bởi **[Rainan1010](https://github.com/Rainan1010)**.

ChatGPT là bản viết lại độc lập cho nền tảng **ChatGPT (chatgpt.com)** với các cải tiến:
- Multi-selector fallback (dự phòng nhiều selector khi OpenAI cập nhật giao diện)
- Stop-button polling — tận dụng đặc trưng nút "Stop generating" của ChatGPT
- Xử lý SPA navigation giữa các cuộc trò chuyện

---

## ⚠️ Miễn trừ trách nhiệm

- **ChatGPT** là dự án mã nguồn mở cá nhân, **không liên kết với OpenAI** hay ChatGPT.
- Extension hoạt động hoàn toàn phía client, **không thu thập hay lưu trữ bất kỳ dữ liệu cá nhân nào**.
- Vì OpenAI có thể cập nhật giao diện ChatGPT bất kỳ lúc nào, một số tính năng có thể cần cập nhật theo.

---

<div align="center">

Made with 💚 | Inspired by [Gemielle](https://github.com/Rainan1010/Gemielle) by Rainan1010

</div>
