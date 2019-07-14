preview:
	jekyll serve

serve:
	jekyll serve

test-links:
	htmlproofer .

install:
	gem install html-proofer

clean:
	rm -rf _site
