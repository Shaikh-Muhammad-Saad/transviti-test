from playwright.sync_api import sync_playwright, expect

def run_verification(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    # Handle the confirm dialog for the delete action
    page.on("dialog", lambda dialog: dialog.accept())

    try:
        # 1. Verify Companies page
        page.goto("http://localhost:3000/companies")
        search_input_companies = page.get_by_placeholder("Search for a company...")
        search_input_companies.type("Stellar")
        expect(page.get_by_text("Stellar Solutions")).to_be_visible()
        page.screenshot(path="jules-scratch/verification/final-companies.png")
        search_input_companies.fill("")

        # 2. Verify Job Tracker page
        page.goto("http://localhost:3000/tracker")
        page.get_by_role("button", name="Add New Application").click()
        dialog_tracker = page.get_by_role("dialog")
        dialog_tracker.get_by_label("Company").fill("TestCorp")
        dialog_tracker.get_by_label("Position").fill("QA Engineer")
        dialog_tracker.get_by_label("Date Applied").fill("2025-10-21")
        dialog_tracker.get_by_role("button", name="Add Application").click()
        expect(page.get_by_text("TestCorp")).to_be_visible()
        page.screenshot(path="jules-scratch/verification/final-tracker.png")

        # 3. Verify Calendar page
        page.goto("http://localhost:3000/calendar")
        page.get_by_role("button", name="Add Event").first.click()
        dialog_calendar = page.get_by_role("dialog")
        dialog_calendar.get_by_label("Event Title").fill("Final Review")
        dialog_calendar.get_by_label("Date").fill("2025-10-28")
        dialog_calendar.get_by_role("button", name="Add Event").click()
        expect(page.get_by_text("Final Review")).to_be_visible()
        page.screenshot(path="jules-scratch/verification/final-calendar.png", full_page=True)

        # 4. Verify Documents page
        page.goto("http://localhost:3000/documents")
        portfolio_row = page.get_by_role("row", name="Portfolio.pdf")
        portfolio_row.get_by_role("button").nth(1).click()
        expect(page.get_by_text("Portfolio.pdf")).not_to_be_visible()
        page.screenshot(path="jules-scratch/verification/final-documents.png")

        # 5. Verify Messages page
        page.goto("http://localhost:3000/messages")
        sidebar = page.get_by_label("Conversations list")
        chat_window = page.get_by_label("Chat window")
        message_input = page.get_by_placeholder("Type a message...")
        message_input.type("Final test message.")
        page.get_by_label("Send message").click()
        expect(chat_window.get_by_text("Final test message.")).to_be_visible()
        page.screenshot(path="jules-scratch/verification/final-messages.png")

        # 6. Verify Notifications page
        page.goto("http://localhost:3000/notifications")
        unread_indicators_before = page.locator(".w-2\\.5.h-2\\.5.bg-blue-600")
        expect(unread_indicators_before).to_have_count(2)
        page.get_by_role("button", name="Mark all as read").click()
        unread_indicators_after = page.locator(".w-2\\.5.h-2\\.5.bg-blue-600")
        expect(unread_indicators_after).to_have_count(0)
        page.screenshot(path="jules-scratch/verification/final-notifications.png")

    finally:
        browser.close()

with sync_playwright() as playwright:
    run_verification(playwright)